import styled from 'styled-components';

export const HeaderItemContainer = styled.div`
  strong {
    flex: 1;
    font-size: ${({ theme }) => theme.textSizes['title-title-s']};
    color: ${({ theme }) => theme.colors['base-title']};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    &:hover {
      color: ${({ theme }) => theme.colors['brand-blue']};
    }
  }
`;
