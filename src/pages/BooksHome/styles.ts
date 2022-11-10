import styled from 'styled-components';

export const HomeContainer = styled.section`
  margin-top: 80px;
`;

export const BookListContainer = styled.div`
  height: 100%;
  width: 100%;
  flex-wrap: wrap;
  padding-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  gap: 2rem;
  margin-bottom: 14rem;
`;
