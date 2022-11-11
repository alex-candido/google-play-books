import styled from 'styled-components';

export const ButtonContainer = styled.button`
  background: ${({ theme }) => theme.colors['brand-blue']};
  height: 56px;
  border-radius: 10px;
  /* padding: 0.75rem 0.5rem; */
  color: ${({ theme }) => theme.colors['base-title']};
  text-align: center;
  font-size: ${({ theme }) => theme.textSizes['title-title-s']};
  font-weight: 600;
  transition: background-color 0.2s;
  margin-left: 20px;
  font-size: ${({ theme }) => theme.textSizes['title-title-s']};
  width: 100%;
  max-width: 12rem;
  svg {
    padding-right: 5px;
  }

  &:hover {
    background: ${({ theme }) => theme.colors['brand-blue-white']};
  }
`;