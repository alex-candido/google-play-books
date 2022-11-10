import React from 'react';
import { useLocation } from 'react-router-dom';
import noImg from '../../assets/no-image.png';
import { BookDetailsContainer, DetailsContainer, PositionImg } from './styles';

export interface IBooks {
  imageLinks: {
    thumbnail: string;
    smallThumbnail: string;
  };
  title: string;
  authors: string[];
  publisher: string;
  publishedDate: Date;
  pageCount: number;
  description: string;
}

export interface Details {
  id: string;
  volumeInfo: IBooks;
}

const BookDetails: React.FC = () => {
  // const { bookDetail } = useParams();
  // const {  } = useBooks();
  // console.log(id);

  const location = useLocation();
  const book = location.state.details;

  return (
    <BookDetailsContainer>
      <div className="container">
        <DetailsContainer>
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </DetailsContainer>
      </div>
    </BookDetailsContainer>
  );
};

export default BookDetails;
