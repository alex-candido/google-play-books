import React, { Dispatch, ReactNode, useState } from 'react';
import { api } from '../services/api';

interface BooksContextType {
  searchBook: () => void;
  search: string;
  setSearch: Dispatch<React.SetStateAction<string>>;
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

  async function searchBook() {
    const response = await api.get(
      `/books/v1/volumes?q=${search}&key=AIzaSyDKEPLS_DBkW3OeAK1QmvvYlnp5v0PmFQI` +
        `&maxResults=40`,
    );
    setBookData(response.data.items);
  }

  return (
    <BooksContext.Provider value={{ searchBook, search, setSearch }}>
      {children}
    </BooksContext.Provider>
  );
};

export default BooksContext;
