import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ButtonContainer = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors['brand-blue']};
  height: 56px;
  margin-left: 1rem;
  border-radius: 10px;
  color: ${({ theme }) => theme.colors['base-title']};
  text-align: center;
  font-size: ${({ theme }) => theme.textSizes['title-title-s']};
  font-weight: 600;
  transition: background-color 0.2s;
  font-size: ${({ theme }) => theme.textSizes['title-title-s']};
  width: 100%;
  max-width: 12rem;
  svg {
    padding-right: 5px;
  }
  strong {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
    @media (max-width: 550px) {
      span {
        display: none;
      }
    }
  }

  &:hover {
    background: ${({ theme }) => theme.colors['brand-blue-white']};
  }
`;
