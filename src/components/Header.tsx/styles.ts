import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors['base-post']};
  position: fixed;
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  z-index: 2000;

  > div {
    display: flex;

    a {
      display: flex;
      align-items: center;
    }
  }

  img {
    height: 50px;
  }

  @media (max-width: 80rem) {
    padding: 0 1rem;
    > div {
      a {
        margin-right: 20px;
      }
    }
  }
`;

export const BookSearchInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 36px;
`;

export const SearchInput = styled.div<ContainerProps>`
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1rem;
  background: ${({ theme }) => theme.colors['base-input']};
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.colors['base-border']};

  svg {
    margin-right: 1rem;
  }

  ${props =>
    props.isFocused &&
    css`
      color: ${({ theme }) => theme.colors['brand-blue']};
      border-color: ${({ theme }) => theme.colors['brand-blue']};
    `};

  input {
    width: 100%;
    border: 0;
    background: ${({ theme }) => theme.colors['base-input']};
    color: ${({ theme }) => theme.colors['base-text']};

    &::placeholder {
      color: ${({ theme }) => theme.colors['base-label']};
    }
  }
`;
