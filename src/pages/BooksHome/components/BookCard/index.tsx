import React from 'react';
import noImg from '../../../../assets/no-image.png';
import { Volume } from '../../../../contexts/BooksContext';
import { BookCardContainer, PositionImg } from './styles';

interface IBooksProps {
  book: Volume;
}

const BookCard: React.FC<IBooksProps> = ({ book }) => {
  const imageBook =
    book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;
  return (
    <BookCardContainer to={`/book/${book.id}`}>
      <PositionImg>
        {imageBook ? (
          <img src={imageBook} alt={book.volumeInfo.title} />
        ) : (
          <img src={noImg} alt={book.volumeInfo.title} />
        )}
      </PositionImg>
      <div>
        {book.volumeInfo.title ? (
          <strong>{book.volumeInfo.title}</strong>
        ) : (
          <strong>Title</strong>
        )}
        {book.volumeInfo.authors ? (
          <h4>{book.volumeInfo.authors}</h4>
        ) : (
          <h4>Author</h4>
        )}
        {book.volumeInfo.description ? (
          <p>{book.volumeInfo.description}</p>
        ) : (
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        )}
      </div>
    </BookCardContainer>
  );
};

export default BookCard;
