import React from 'react';
import { useBooks } from '../../hooks/useBooks';
import BookCard from './components/BookCard';
import { BookListContainer, HomeContainer } from './styles';

const Home: React.FC = () => {
  const { bookData } = useBooks();
  console.log(bookData.map(item => item.volumeInfo));
  return (
    <HomeContainer>
      <div className="container">
        <BookListContainer>
          {bookData.map(book => (
            <BookCard book={book.volumeInfo} />
          ))}
        </BookListContainer>
      </div>
    </HomeContainer>
  );
};

export default Home;
