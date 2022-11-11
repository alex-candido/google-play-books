import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useBooks } from '../../hooks/useBooks';
import { ButtonContainer } from './styles';

const Favorites: React.FC = () => {
  const { bookQuatity } = useBooks();

  return (
    <ButtonContainer type="button">
      {bookQuatity >= 1 && (
        <span>
          <FontAwesomeIcon icon={faHeart} /> Favoritos {bookQuatity}
        </span>
      )}
    </ButtonContainer>
  );
};

export default Favorites;
