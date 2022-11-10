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
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nemo,
        quae labore commodi in eveniet perspiciatis dicta mollitia veritatis
        amet veniam maxime omnis accusantium? Officia aliquam eveniet impedit
        veritatis eos?
      </p>
    </DetailsContentContainer>
  );
};

export default DetailsContent;
