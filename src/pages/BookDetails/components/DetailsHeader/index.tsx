import React from 'react';
import noImg from '../../../../assets/no-image.png';
import DetailsHeaderItem from '../DetailsHeaderItem';
import { DetailsHeaderContainer, PositionImg } from './styles';

export interface DetailsHeaderProps {
  id: string;
  searchInfo: string;
  image: string;
  title: string;
  authors: string;
  publisher: string;
  categories: string;
  language: string;
  publishedDate: string;
  pageCount: string;
  description: string;
}

export interface BookDetailsHeaderProps {
  book: DetailsHeaderProps;
}

const DetailsHeader: React.FC<BookDetailsHeaderProps> = ({ book }) => {
  const d = book.publishedDate;
  const [ano] = d.split('-');
  return (
    <DetailsHeaderContainer>
      {book.title ? <h1>{book.title}</h1> : <h1>Title</h1>}
      <div>
        <PositionImg>
          {book.image ? (
            <img src={book.image} alt={book.title} />
          ) : (
            <img src={noImg} alt={book.title} />
          )}
        </PositionImg>
        <div>
          {book.authors ? (
            <DetailsHeaderItem detailTitle="Autor" detail={book.authors} />
          ) : (
            <DetailsHeaderItem detailTitle="Autor" detail="authors" />
          )}
          {book.publisher ? (
            <DetailsHeaderItem detailTitle="Editora" detail={book.publisher} />
          ) : (
            <DetailsHeaderItem detailTitle="Editora" detail="publisher" />
          )}
          {book.categories ? (
            <DetailsHeaderItem
              detailTitle="Categorias"
              detail={book.categories}
            />
          ) : (
            <DetailsHeaderItem detailTitle="Categorias" detail="categories" />
          )}
          {book.language ? (
            <DetailsHeaderItem detailTitle="Idioma" detail={book.language} />
          ) : (
            <DetailsHeaderItem detailTitle="Idioma" detail="language" />
          )}
          {book.publisher ? (
            <DetailsHeaderItem detailTitle="Publicado em" detail={ano} />
          ) : (
            <DetailsHeaderItem detailTitle="Publicado em" detail="publisher" />
          )}
          {book.pageCount ? (
            <DetailsHeaderItem detailTitle="Páginas" detail={book.pageCount} />
          ) : (
            <DetailsHeaderItem detailTitle="Páginas" detail="pageCount" />
          )}
        </div>
      </div>
    </DetailsHeaderContainer>
  );
};

export default DetailsHeader;
