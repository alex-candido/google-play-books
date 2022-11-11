import React from 'react';
import { useBooks } from '../../hooks/useBooks';
import BookCard from '../BooksHome/components/BookCard';
import NoFavorites from './NoFavorites';
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
          <section>{bookItems.length <= 0 && <NoFavorites />}</section>
        </FavoritesListContainer>
      </div>
    </FavoritesContainer>
  );
};

export default BookFavorites;
