import styled from 'styled-components';

export const HeaderContainer = styled.header`
  background: ${({ theme }) => theme.colors['base-header']};
  border-bottom: 1px solid #1b1e29;
  display: flex;
  height: 80px;
  justify-content: center;
  align-items: center;
  top: 0;
  width: 100%;
  z-index: 2000;
`;
