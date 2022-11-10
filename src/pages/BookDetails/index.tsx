import React from 'react';
import { useLocation } from 'react-router-dom';
import DetailsContent from './components/DetailsContent';
import DetailsHeader from './components/DetailsHeader';
import { BookDetailsContainer } from './styles';

const BookDetails: React.FC = () => {
  const location = useLocation();
  const book = location.state.details;

  return (
    <BookDetailsContainer>
      <div>
        <DetailsHeader book={book} />
        <DetailsContent content={book} />
      </div>
    </BookDetailsContainer>
  );
};

export default BookDetails;
