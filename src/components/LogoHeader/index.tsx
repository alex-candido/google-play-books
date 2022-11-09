import React from 'react';
import playBooksLogoImg from '../../assets/play-books-logo.png';
import { LogoHeaderContainer } from './styles';

const LogoHeader: React.FC = () => {
  return (
    <LogoHeaderContainer>
      <a href="/">
        <img
          src={playBooksLogoImg}
          alt="playBooksLogoImg"
          style={{ height: '47px' }}
        />
      </a>
    </LogoHeaderContainer>
  );
};

export default LogoHeader;
