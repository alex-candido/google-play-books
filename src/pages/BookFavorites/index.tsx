import React from 'react';
import { useBooks } from '../../hooks/useBooks';
import BookCard from '../BooksHome/components/BookCard';
import { FavoritesContainer, FavoritesListContainer } from './styles';

const BookFavorites: React.FC = () => {
  const { bookItems } = useBooks();

  return (
    <FavoritesContainer>
      <div className="container">
        <FavoritesListContainer>
          {bookItems.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </FavoritesListContainer>
      </div>
    </FavoritesContainer>
  );
};

export default BookFavorites;
