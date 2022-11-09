import React from 'react';
import { ButtonContainer } from './styles';

interface ButtnProps {
  searchBook: () => void;
}

const Button: React.FC<ButtnProps> = ({ searchBook }) => {
  return (
    <ButtonContainer type="button" onClick={searchBook}>
      Pesquisar
    </ButtonContainer>
  );
};

export default Button;
