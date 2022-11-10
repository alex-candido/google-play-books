import React from 'react';
import noImg from '../../../../assets/no-image.png';
import { IBooks } from '../../../../contexts/BooksContext';
import { BookCardContainer, PositionImg } from './styles';

interface IBooksProps {
  book: IBooks;
}

const BookCard: React.FC<IBooksProps> = ({ book }) => {
  const imageBook = book.imageLinks && book.imageLinks.smallThumbnail;
  return (
    <BookCardContainer to="/">
      <PositionImg>
        {imageBook ? (
          <img src={imageBook} alt="" />
        ) : (
          <img src={noImg} alt="" />
        )}
      </PositionImg>
      <div>
        <strong>{book.title}</strong>
        <h4>{book.authors}</h4>
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
