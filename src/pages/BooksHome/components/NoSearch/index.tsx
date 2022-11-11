import React from 'react';
import noSearchImg from '../../../../assets/no-search.png';
import { NoSearchContainer } from './styles';

const NoSearch: React.FC = () => {
  return (
    <NoSearchContainer>
      <img src={noSearchImg} alt="" />
      <div>
        <p>Você ainda não pesquisou livros</p>
        <span>
          Pesquise e navegue pela lista de livros do Google Play Books
        </span>
      </div>
    </NoSearchContainer>
  );
};

export default NoSearch;
