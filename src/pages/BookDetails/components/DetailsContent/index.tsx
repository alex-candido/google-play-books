import React from 'react';
import { DetailsHeaderProps } from '../DetailsHeader';
import { DetailsContentContainer } from './styles';

export interface DetailsContentProps {
  content: DetailsHeaderProps;
}

const DetailsContent: React.FC<DetailsContentProps> = ({ content }) => {
  return (
    <DetailsContentContainer>
      <strong>{content.searchInfo}</strong>
      <p>{content.description}</p>
    </DetailsContentContainer>
  );
};

export default DetailsContent;
