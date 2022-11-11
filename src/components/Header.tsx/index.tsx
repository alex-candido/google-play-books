import React from 'react';
import { useBooks } from '../../hooks/useBooks';
import BookSearchInput from '../BookSearchInput';
import Favorites from '../Favorites';
import LogoHeader from '../LogoHeader';
import { HeaderContainer } from './styles';

const Header: React.FC = () => {
  const { searchBook, search, setSearch, handleSearchBook } = useBooks();

  return (
    <HeaderContainer>
      <form className="container" onSubmit={handleSearchBook}>
        <LogoHeader />
        <BookSearchInput
          search={search}
          setSearch={setSearch}
          // searchBook={searchBook}
        />
        <Favorites />
      </form>
    </HeaderContainer>
  );
};

export default Header;
