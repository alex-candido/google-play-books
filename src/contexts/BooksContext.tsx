import { produce } from 'immer';
import React, { Dispatch, FormEvent, ReactNode, useState } from 'react';
import { api } from '../services/api';

export interface IBooks {
  imageLinks: {
    thumbnail: string;
    smallThumbnail: string;
  };
  previewLink: string;
  title: string;
  authors: string[];
  publisher: string;
  categories: string[];
  language: string;
  publishedDate: string;
  pageCount: number;
  description: string;
}

export interface Volume {
  id: string;
  searchInfo?: {
    textSnippet?: string;
  };
  volumeInfo: IBooks;
}

export interface BookItem extends Volume {
  quantity: number;
}

const PLAY_BOOKS_STORAGE_KEY = 'playBooks:bookItems';

interface BooksContextType {
  searchBook: () => void;
  search: string;
  setSearch: Dispatch<React.SetStateAction<string>>;
  handleSearchBook: (event: FormEvent<HTMLFormElement>) => void;
  bookData: Volume[];
  addBookToFavorite: (book: BookItem) => void;
  removeBookItem: (bookItemId: string) => void;
  bookQuatity: number;
}

interface BooksContextProviderProps {
  children: ReactNode;
}

export const BooksContext = React.createContext({} as BooksContextType);

export const BooksContextProvider: React.FC<BooksContextProviderProps> = ({
  children,
}) => {
  const [search, setSearch] = useState('');
  const [bookData, setBookData] = useState([]);

  const [bookItems, setBookItems] = useState<BookItem[]>(() => {
    const storedBookItems = localStorage.getItem(PLAY_BOOKS_STORAGE_KEY);
    if (storedBookItems) {
      return JSON.parse(storedBookItems);
    }
    return [];
  });

  const bookQuatity = bookItems.length;

  async function searchBook() {
    const response = await api.get(
      `/books/v1/volumes?q=${search}&key=AIzaSyDKEPLS_DBkW3OeAK1QmvvYlnp5v0PmFQI` +
        `&maxResults=40`,
    );
    setBookData(response.data.items);
  }

  function handleSearchBook(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    searchBook();
  }

  function addBookToFavorite(book: BookItem): void {
    const bookAlreadyExistsInFavorite = bookItems.findIndex(
      bookItem => bookItem.id === book.id,
    );

    const newBook = produce(bookItems, draft => {
      const draftBookItems = draft;
      if (bookAlreadyExistsInFavorite < 0) {
        draftBookItems.push(book);
      } else {
        draftBookItems[bookAlreadyExistsInFavorite].quantity += book.quantity;
      }
    });

    setBookItems(newBook);
  }

  function removeBookItem(bookItemId: string): void {
    const newBook = produce(bookItems, draft => {
      const draftBookItems = draft;
      const bookExistsInItems = bookItems.findIndex(
        bookItem => bookItem.id === bookItemId,
      );

      if (bookExistsInItems >= 0) {
        draftBookItems.splice(bookExistsInItems, 1);
      }
    });

    setBookItems(newBook);
  }

  React.useEffect(() => {
    localStorage.setItem(PLAY_BOOKS_STORAGE_KEY, JSON.stringify(bookItems));
  }, [bookItems]);

  return (
    <BooksContext.Provider
      value={{
        searchBook,
        search,
        setSearch,
        handleSearchBook,
        bookData,
        addBookToFavorite,
        removeBookItem,
        bookQuatity,
      }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
