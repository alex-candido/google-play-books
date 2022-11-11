import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import noImg from '../../../../assets/no-image.png';
import ExternalLink from '../../../../components/ExternalLink';
import { Volume } from '../../../../contexts/BooksContext';
import DetailsHeaderItem from '../DetailsHeaderItem';
import { DetailsHeaderContainer, PositionImg } from './styles';

export interface BookDetailsHeaderProps {
  book: Volume;
}

const DetailsHeader: React.FC<BookDetailsHeaderProps> = ({ book }) => {
  const d = book.volumeInfo.publishedDate;
  const [ano] = d.split('-');
  const navigate = useNavigate();

  function goBack() {
    navigate('/');
  }

  return (
    <DetailsHeaderContainer>
      <header>
        <ExternalLink
          as="button"
          onClick={goBack}
          icon={<FontAwesomeIcon icon={faChevronLeft} />}
          text="Voltar"
          variant="iconLeft"
          href=""
        />
        <ExternalLink
          text="Preview"
          href={book.volumeInfo.previewLink}
          target="_blank"
        />
      </header>
      {book.volumeInfo.title ? (
        <h1>{book.volumeInfo.title}</h1>
      ) : (
        <h1>Title</h1>
      )}
      <div>
        <PositionImg>
          {book.volumeInfo.imageLinks.thumbnail ? (
            <img
              src={book.volumeInfo.imageLinks.thumbnail}
              alt={book.volumeInfo.title}
            />
          ) : (
            <img src={noImg} alt={book.volumeInfo.title} />
          )}
        </PositionImg>
        <div>
          {book.volumeInfo.authors ? (
            <DetailsHeaderItem
              detailTitle="Autor"
              detail={book.volumeInfo.authors}
            />
          ) : (
            <DetailsHeaderItem detailTitle="Autor" detail="authors" />
          )}
          {book.volumeInfo.publisher ? (
            <DetailsHeaderItem
              detailTitle="Editora"
              detail={book.volumeInfo.publisher}
            />
          ) : (
            <DetailsHeaderItem detailTitle="Editora" detail="publisher" />
          )}
          {book.volumeInfo.categories ? (
            <DetailsHeaderItem
              detailTitle="Categorias"
              detail={book.volumeInfo.categories}
            />
          ) : (
            <DetailsHeaderItem detailTitle="Categorias" detail="categories" />
          )}
          {book.volumeInfo.language ? (
            <DetailsHeaderItem
              detailTitle="Idioma"
              detail={book.volumeInfo.language}
            />
          ) : (
            <DetailsHeaderItem detailTitle="Idioma" detail="language" />
          )}
          {ano ? (
            <DetailsHeaderItem detailTitle="Publicado em" detail={ano} />
          ) : (
            <DetailsHeaderItem detailTitle="Publicado em" detail="publisher" />
          )}
          {book.volumeInfo.pageCount ? (
            <DetailsHeaderItem
              detailTitle="Páginas"
              detail={book.volumeInfo.pageCount}
            />
          ) : (
            <DetailsHeaderItem detailTitle="Páginas" detail="pageCount" />
          )}
        </div>
      </div>
    </DetailsHeaderContainer>
  );
};

export default DetailsHeader;
