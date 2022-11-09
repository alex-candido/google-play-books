import React from 'react';
// import { useBooks } from '../../hooks/useBooks';
import { BookListContainer, HomeContainer } from './styles';

const Home: React.FC = () => {
  // const { bookData } = useBooks();
  return (
    <HomeContainer>
      <div className="container">
        <BookListContainer>
          {/* {bookData.map(book => (
            <BookCard book={book} />
          ))} */}
        </BookListContainer>
      </div>
    </HomeContainer>
  );
};

export default Home;
