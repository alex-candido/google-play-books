import React from 'react';
import { BookCardContainer, PositionImg } from './styles';

const BookCard: React.FC = () => {
  return (
    <BookCardContainer to="/">
      <PositionImg>
        <img
          src="https://books.google.com/books/content?id=GgQmDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          alt="Nada"
        />
      </PositionImg>
      <div>
        <strong>O universo de Harry Potter de A a Z</strong>
        <h4>Aubrey Malone</h4>
        <h4>2014</h4>
        <p>
          O universo de Harry Potter de A a Z permite reviver as recordações que
          marcaram a infância de muita gente, trazendo ainda curiosidades sobre
          a vida...
        </p>
      </div>
    </BookCardContainer>
  );
};

export default BookCard;
