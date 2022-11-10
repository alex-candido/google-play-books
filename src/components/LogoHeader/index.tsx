import React from 'react';
import { useNavigate } from 'react-router-dom';
import playBooksLogoImg from '../../assets/play-books-logo.png';
import { LogoHeaderContainer } from './styles';

const LogoHeader: React.FC = () => {
  const navigate = useNavigate();

  function goBack() {
    navigate('/');
  }

  return (
    <LogoHeaderContainer onClick={() => goBack()}>
      <div>
        <img
          src={playBooksLogoImg}
          alt="playBooksLogoImg"
          style={{ height: '47px' }}
        />
      </div>
    </LogoHeaderContainer>
  );
};

export default LogoHeader;
