import React from 'react';
import noImg from '../../../../assets/no-image.png';
import DetailsHeaderItem from '../DetailsHeaderItem';
import { DetailsHeaderContainer, PositionImg } from './styles';

interface DetailsHeaderProps {
  id: string;
  image: string;
  title: string;
  authors: string;
  publisher: string;
  categories: string;
  publishedDate: string;
  pageCount: string;
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

        <DetailsHeaderItem detailTitle="Autor" detail={book.authors} />
        <DetailsHeaderItem detailTitle="Editora" detail={book.publisher} />
        <DetailsHeaderItem detailTitle="Categorias" detail={book.categories} />
        <DetailsHeaderItem detailTitle="Publicado em" detail={book.publisher} />
        <DetailsHeaderItem detailTitle="Páginas" detail={book.pageCount} />
      </div>
    </DetailsHeaderContainer>
  );
};

export default DetailsHeader;
