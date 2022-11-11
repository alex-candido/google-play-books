import React from 'react';
import noSearchImg from '../../../assets/no-search.png';
import { NoSearchContainer } from './styles';

const NoFavorites: React.FC = () => {
  return (
    <NoSearchContainer>
      <img src={noSearchImg} alt="" />
      <div>
        <p>Você ainda não adicionou favoritos</p>
        <span>
          Pesquise e navegue pela lista de livros do Google Play Books
        </span>
      </div>
    </NoSearchContainer>
  );
};

export default NoFavorites;
