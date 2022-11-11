import React from 'react';
import { HeaderItemContainer } from './styles';

interface DetailsHeaderItemProps {
  detailTitle: string;
  detail: string[] | string | number;
}

const DetailsHeaderItem: React.FC<DetailsHeaderItemProps> = ({
  detailTitle,
  detail,
}) => {
  return (
    <HeaderItemContainer>
      <strong>{detailTitle}</strong>
      <span>{detail}</span>
    </HeaderItemContainer>
  );
};

export default DetailsHeaderItem;
