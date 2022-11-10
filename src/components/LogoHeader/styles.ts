import styled from 'styled-components';

export const LogoHeaderContainer = styled.div`
  display: flex;
  cursor: pointer;
  > div {
    display: flex;
    align-items: center;
  }

  @media (max-width: 80rem) {
    margin-right: 20px;
  }
`;
