import React from 'react';
import { useBooks } from '../../hooks/useBooks';
import BookSearchInput from '../BookSearchInput';
import Button from '../Button';
import LogoHeader from '../LogoHeader';
import { HeaderContainer } from './styles';

const Header: React.FC = () => {
  const { searchBook, search, setSearch } = useBooks();

  return (
    <HeaderContainer>
      <div className="container">
        <LogoHeader />
        <BookSearchInput
          search={search}
          setSearch={setSearch}
          searchBook={searchBook}
        />
        <Button searchBook={searchBook} />
      </div>
    </HeaderContainer>
  );
};

export default Header;
