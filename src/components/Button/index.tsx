import React from 'react';
import { useBooks } from '../../hooks/useBooks';
import { ButtonContainer } from './styles';

const Button: React.FC = () => {
  const { bookQuatity } = useBooks();

  return (
    <ButtonContainer type="button">
      {bookQuatity >= 1 && <span> Favoritos {bookQuatity}</span>}
    </ButtonContainer>
  );
};

export default Button;
