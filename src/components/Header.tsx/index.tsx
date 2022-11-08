import { MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import playBooksLogoImg from '../../assets/play-books-logo.png';
import { HeaderContainer, SearchInput } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <div>
          <a href="/">
            <img src={playBooksLogoImg} alt="playBooksLogoImg" />
          </a>
        </div>
        <SearchInput>
          <input type="text" placeholder="Pesquisar livros" />
          <MagnifyingGlass size={25} />
        </SearchInput>
      </div>
    </HeaderContainer>
  );
};

export default Header;
