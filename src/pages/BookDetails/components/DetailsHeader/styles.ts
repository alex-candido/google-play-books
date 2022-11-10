import styled from 'styled-components';

export const DetailsHeaderContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  /* min-height: 10.5rem; */
  margin-top: -5.5rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  border: 2px solid ${({ theme }) => theme.colors['base-post']};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  &:hover {
    border-color: ${({ theme }) => theme.colors['brand-blue']};
  }

  > div {
    display: flex;
    gap: 2rem;
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
  align-items: start;

  img {
    height: 230px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme.colors['base-post']};
    max-width: 150px;
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
