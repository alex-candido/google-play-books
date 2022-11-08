import { MagnifyingGlass } from 'phosphor-react';
import React, { useCallback, useState } from 'react';
import playBooksLogoImg from '../../assets/play-books-logo.png';
import { BookSearchInput, HeaderContainer, SearchInput } from './styles';

const Header: React.FC = () => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <HeaderContainer>
      <div className="container">
        <div>
          <a href="/">
            <img
              src={playBooksLogoImg}
              alt="playBooksLogoImg"
              style={{ height: '47px' }}
            />
          </a>
        </div>
        <BookSearchInput>
          <SearchInput isFocused={isFocused}>
            <MagnifyingGlass size={20} />
            <input
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              type="text"
              placeholder="Pesquisar livros"
            />
          </SearchInput>
        </BookSearchInput>
      </div>
    </HeaderContainer>
  );
};

export default Header;
