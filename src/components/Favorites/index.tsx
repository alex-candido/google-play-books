import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useBooks } from '../../hooks/useBooks';
import { ButtonContainer } from './styles';

const Favorites: React.FC = () => {
  const { bookQuatity } = useBooks();

  return (
    <ButtonContainer to="/favorites">
      {bookQuatity >= 1 && (
        <strong>
          <FontAwesomeIcon icon={faHeart} /> <span>Favoritos</span>{' '}
          {bookQuatity}
        </strong>
      )}
    </ButtonContainer>
  );
};

export default Favorites;
