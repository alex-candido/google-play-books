import styled, { css } from 'styled-components';

interface ContainerProps {
  isFocused: boolean;
}

export const BookSearchInputContainer = styled.div`
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
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.2);
  transition: 0.4s;

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
