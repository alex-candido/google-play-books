import styled from 'styled-components';

export const BookDetailsContainer = styled.section`
  margin-top: 12rem;
  margin-bottom: 10rem;
`;

export const DetailsContainer = styled.div`
  width: 100%;
  min-height: 10.5rem;
  margin-top: -5.5rem;
  background: ${({ theme }) => theme.colors['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;
