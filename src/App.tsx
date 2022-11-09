import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { BooksContextProvider } from './contexts/BooksContext';
import Router from './routes';
import { GlobalStyles } from './styles/global';
import { defaultTheme } from './styles/theme/defaultTheme';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <BrowserRouter>
        <BooksContextProvider>
          <Router />
        </BooksContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
