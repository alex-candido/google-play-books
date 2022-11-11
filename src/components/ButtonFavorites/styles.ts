import styled from 'styled-components';

export const ButtonFavoritesContainer = styled.button`
  max-width: 6rem;
  border: none;
  background: none;
  color: ${({ theme }) => theme.colors['brand-blue']};
  font-size: ${({ theme }) => theme.textSizes['components-link']};
  text-transform: uppercase;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 700;
  transition: 0.4s;
  height: 19px;
  line-height: 19px;
  flex-direction: row-reverse;
  margin-top: 1rem;
  svg {
    width: 0.75rem;
    height: 0.75rem;
  }

  &:hover {
    border-bottom: 1px solid transparent;
    border-color: ${({ theme }) => theme.colors['brand-blue']};
  }
`;
