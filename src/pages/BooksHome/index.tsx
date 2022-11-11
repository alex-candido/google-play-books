import React from 'react';
import { useBooks } from '../../hooks/useBooks';
import BookCard from './components/BookCard';
import NoSearch from './components/NoSearch';
import { BookListContainer, HomeContainer } from './styles';

const Home: React.FC = () => {
  const { bookData } = useBooks();

  return (
    <HomeContainer>
      <div className="container">
        <BookListContainer>
          {bookData.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
          <section>{bookData.length <= 0 && <NoSearch />}</section>
        </BookListContainer>
      </div>
    </HomeContainer>
  );
};

export default Home;
