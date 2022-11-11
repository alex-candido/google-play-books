import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { ButtonFavoritesContainer } from './styles';

interface ButtonFavorites {
  favoriteColor: boolean;
  toFavorite: () => void;
}

const ButtonFavorites: React.FC<ButtonFavorites> = ({
  toFavorite,
  favoriteColor,
}) => {
  return (
    <ButtonFavoritesContainer
      onClick={toFavorite}
      style={{
        color: `${favoriteColor ? '#F32D35' : '#00acee'}`,
        borderColor: `${favoriteColor ? '#F32D35' : '#00acee'}`,
      }}
    >
      Pesquisar
      <FontAwesomeIcon icon={faHeart} />
    </ButtonFavoritesContainer>
  );
};

export default ButtonFavorites;
