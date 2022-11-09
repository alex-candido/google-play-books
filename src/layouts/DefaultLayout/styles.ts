import styled from 'styled-components';

export const DefaultLayoutContainer = styled.div`
  .container {
    width: 100%;
    max-width: 80rem;
    margin: 0 auto;
    border: 0;
  }

  > main {
    @media (max-width: 80rem) {
      padding: 0 2rem;
    }
  }
`;
