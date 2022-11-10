import React, { Dispatch, FormEvent, ReactNode, useState } from 'react';
import { api } from '../services/api';

export interface IBooks {
  imageLinks: {
    thumbnail: string;
    smallThumbnail: string;
  };
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
  // const [bookDetails, setBookDetails] = useState('');
  const [bookData, setBookData] = useState([]);

  async function searchBook() {
    const response = await api.get(
      `/books/v1/volumes?q=${search}&key=AIzaSyDKEPLS_DBkW3OeAK1QmvvYlnp5v0PmFQI` +
        `&maxResults=40`,
    );
    setBookData(response.data.items);
  }

  // async function getBookDetails(id: string) {
  //   const response = await api.get(
  //     `/books/v1/volumes/${id}?&key=AIzaSyDKEPLS_DBkW3OeAK1QmvvYlnp5v0PmFQI`,
  //   );

  //   setBookDetails(response.data);
  // }

  // React.useEffect(() => {
  //   const id = 'GgQmDwAAQBAJ';
  //   getBookDetails(id);
  // }, [getBookDetails]);

  console.log(bookData);

  function handleSearchBook(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    searchBook();
  }

  return (
    <BooksContext.Provider
      value={{ searchBook, search, setSearch, handleSearchBook, bookData }}
    >
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
