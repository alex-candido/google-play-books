import React from 'react';
import noImg from '../../../../assets/no-image.png';
import { DetailsHeaderContainer, PositionImg } from './styles';

interface DetailsHeaderProps {
  id: string;
  image: string;
  title: string;
  publisher: string;
  authors: string;
  description: string;
}

interface BookDetailsHeaderProps {
  book: DetailsHeaderProps;
}

const DetailsHeader: React.FC<BookDetailsHeaderProps> = ({ book }) => {
  return (
    <DetailsHeaderContainer>
      <PositionImg>
        {book.image ? (
          <img src={book.image} alt={book.title} />
        ) : (
          <img src={noImg} alt={book.title} />
        )}
      </PositionImg>
      <div>
        {book.title ? <h1>{book.title}</h1> : <h1>Title</h1>}
        <strong>Autor</strong>
        <span>{book.authors}</span>
        <strong>Editora</strong>
        <span>{book.publisher}</span>
        <strong>Publicado em</strong>
        <span>{book.publisher}</span>
        <strong>Páginas</strong>
        <span>65</span>
      </div>
    </DetailsHeaderContainer>
  );
};

export default DetailsHeader;
