import { MagnifyingGlass } from 'phosphor-react';
import React from 'react';
import { HeaderContainer } from './styles';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <div className="container">
        <input />
        <MagnifyingGlass size={32} />
      </div>
    </HeaderContainer>
  );
};

export default Header;
