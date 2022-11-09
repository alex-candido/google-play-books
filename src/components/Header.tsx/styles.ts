import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors['base-post']};
  position: fixed;
  display: flex;
  height: 80px;
  justify-content: space-between;
  align-items: center;
  top: 0;
  width: 100%;
  z-index: 2000;
  /* border-bottom: 0.5px solid ${({ theme }) => theme.colors['brand-blue']}; */

  form {
    display: flex;
  }

  img {
    height: 50px;
  }

  @media (max-width: 80rem) {
    padding: 0 20px;
    > div {
      a {
        margin-right: 20px;
      }
    }
  }
`;
