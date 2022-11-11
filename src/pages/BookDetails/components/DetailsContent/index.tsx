import React from 'react';
import { Volume } from '../../../../contexts/BooksContext';
import { DetailsContentContainer } from './styles';

export interface DetailsContentProps {
  book: Volume;
}

const DetailsContent: React.FC<DetailsContentProps> = ({ book }) => {
  return (
    <DetailsContentContainer>
      <strong>{book.searchInfo?.textSnippet}</strong>
      <p>{book.volumeInfo.description}</p>
    </DetailsContentContainer>
  );
};

export default DetailsContent;
