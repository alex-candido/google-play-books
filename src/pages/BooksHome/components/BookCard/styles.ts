import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const BookCardContainer = styled(Link)`
  flex: 1;
  display: flex;
  gap: 1rem;
  width: 100%;
  height: 16.25rem;
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors['base-post']};
  background: ${({ theme }) => theme.colors['base-post']};
  padding: 1.5rem;
  transition: all 0.4s ease 0s;

  &:hover {
    border-color: ${({ theme }) => theme.colors['brand-blue']};
  }

  strong {
    flex: 1;
    font-size: ${({ theme }) => theme.textSizes['title-title-s']};
    color: ${({ theme }) => theme.colors['base-title']};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }

  p {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
`;

export const PositionImg = styled.div`
  display: flex;
  align-items: center;

  img {
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.colors['base-post']};
    height: 100%;
    &:hover {
      border-color: ${({ theme }) => theme.colors['brand-blue']};
    }
    :disabled {
      opacity: 0;
      transform: scale(0);
    }
    :hover {
      opacity: 1;
      transform: scale(1.1);
    }
    transition: all 0.2s;
  }
`;
