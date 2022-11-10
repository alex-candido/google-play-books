import React from 'react';
import { useParams } from 'react-router-dom';
import { BookDetailsContainer, DetailsContainer, PositionImg } from './styles';

const BookDetails: React.FC = () => {
  const { id } = useParams();

  return (
    <BookDetailsContainer>
      <div className="container">
        <DetailsContainer>
          <PositionImg>
            {/* {imageBook ? (
              <img src={imageBook} alt={book.volumeInfo.title} />
            ) : (
              <img src={noImg} alt={book.volumeInfo.title} />
            )} */}
          </PositionImg>
          <div>
            <h1>O Filho: uma história da série Divergente</h1>
            <strong>Autor</strong>
            <span>Veronica Roth</span>
            <strong>Editora</strong>
            <span>Editora Rocco</span>
            <strong>Publicado em</strong>
            <span>2014</span>
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
