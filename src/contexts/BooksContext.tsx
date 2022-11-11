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

const PLAY_BOOKS_STORAGE_KEY = 'playBooks:bookItems';

interface BooksContextType {
  searchBook: () => void;
  search: string;
  setSearch: Dispatch<React.SetStateAction<string>>;
  handleSearchBook: (event: FormEvent<HTMLFormElement>) => void;
  bookData: Volume[];
}

interface BooksContextProviderProps {
  children: ReactNode;
}

export const BooksContext = React.createContext({} as BooksContextType);

export const BooksContextProvider: React.FC<BooksContextProviderProps> = ({
  children,
}) => {
  const [search, setSearch] = useState('');
  // const [bookItems, setBookItems] = useState<BookItem[]>(() => {
  //   const storedBookItems = localStorage.getItem(PLAY_BOOKS_STORAGE_KEY);
  //   if (storedBookItems) {
  //     return JSON.parse(storedBookItems);
  //   }
  //   return [];
  // });
  const [bookData, setBookData] = useState([]);

  async function searchBook() {
    const response = await api.get(
      `/books/v1/volumes?q=${search}&key=AIzaSyDKEPLS_DBkW3OeAK1QmvvYlnp5v0PmFQI` +
        `&maxResults=40`,
    );
    setBookData(response.data.items);
  }

  console.log(bookData);

  function handleSearchBook(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    searchBook();
  }

  // useEffect(() => {
  //   localStorage.setItem(PLAY_BOOKS_STORAGE_KEY, JSON.stringify(booksItems))
  // }, [bookItems]);

  return (
    <BooksContext.Provider
      value={{ searchBook, search, setSearch, handleSearchBook, bookData }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
