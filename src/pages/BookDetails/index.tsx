import React from 'react';
import { useParams } from 'react-router-dom';
import { BookDetailsContainer } from './styles';

const BookDetails: React.FC = () => {
  const { id } = useParams();

  return <BookDetailsContainer>BookDetails</BookDetailsContainer>;
};

export default BookDetails;
