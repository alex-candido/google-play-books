import React from 'react';

import BookSearchInput from '../BookSearchInput';
import Button from '../Button';
import LogoHeader from '../LogoHeader';
import { HeaderContainer } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <LogoHeader />
        <BookSearchInput />
        <Button />
      </div>
    </HeaderContainer>
  );
};

export default Header;
