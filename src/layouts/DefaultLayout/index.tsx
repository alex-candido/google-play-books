import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../components/Header.tsx';
import { DefaultLayoutContainer } from './styles';

const DefaultLayout: React.FC = () => {
  return (
    <DefaultLayoutContainer>
      <Header />
      <main>
        <Outlet />
      </main>
    </DefaultLayoutContainer>
  );
};

export default DefaultLayout;
