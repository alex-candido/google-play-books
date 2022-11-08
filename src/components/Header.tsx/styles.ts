import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors['base-post']};
  position: fixed;
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  z-index: 2000;

  > div {
    display: flex;

    a {
      display: flex;
      align-items: center;
      margin-right: 36px;
    }
  }

  img {
    height: 50px;
  }

  @media (max-width: 80rem) {
    padding: 0 2rem;
  }
`;

export const SearchInput = styled.div`
  width: calc(100% - 500px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors['base-input']};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors['base-border']};

  input {
    width: 100%;
    border: 0;
    background: ${({ theme }) => theme.colors['base-input']};
    color: ${({ theme }) => theme.colors['base-text']};
  }
`;
