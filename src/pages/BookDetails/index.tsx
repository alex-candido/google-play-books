import React from 'react';
import { useParams } from 'react-router-dom';
import { BookDetailsContainer, DetailsContainer } from './styles';

const BookDetails: React.FC = () => {
  const { id } = useParams();

  return (
    <BookDetailsContainer>
      <div className="container">
        <DetailsContainer>Detailcontainer</DetailsContainer>
      </div>
    </BookDetailsContainer>
  );
};

export default BookDetails;
