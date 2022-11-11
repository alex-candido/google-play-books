import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DefaultLayout from '../layouts/DefaultLayout';
import BookDetails from '../pages/BookDetails';
import BookFavorites from '../pages/BookFavorites';
import BookHome from '../pages/BooksHome';

const Router: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<BookHome />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/favorites" element={<BookFavorites />} />
      </Route>
    </Routes>
  );
};

export default Router;
