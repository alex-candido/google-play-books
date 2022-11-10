import styled from 'styled-components';

export const HeaderItemContainer = styled.div`
  strong {
    flex: 1;
    font-size: ${({ theme }) => theme.textSizes['title-title-s']};
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;

    &:hover {
      color: ${({ theme }) => theme.colors['brand-blue']};
    }

    span {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
    }
  }
`;
