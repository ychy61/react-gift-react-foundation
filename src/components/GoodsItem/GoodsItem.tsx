/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

export interface GoodsItemProps {
  imageSrc: string;
  subtitle: string;
  title: string;
  amount: string;
  rankingIndex?: number;
}

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  width: 200px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;

const Subtitle = styled.div`
  font-size: 12px;
  color: #999;
  margin-top: 8px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bold;
  margin-top: 4px;
`;

const Amount = styled.div`
  font-size: 14px;
  color: #333;
  margin-top: 4px;
`;

const RankingBadge = styled.div<{ rankingIndex: number }>`
  position: absolute;
  top: 16px;
  left: 16px;
  background-color: ${(props) => (props.rankingIndex <= 3 ? 'pink' : 'gray')};
  color: white;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`;

function DefaultGoodsItem({
  imageSrc,
  subtitle,
  title,
  amount,
  ...rest
}: GoodsItemProps) {
  return (
    <Container {...rest}>
      <Image src={imageSrc} alt={title} />
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
}

DefaultGoodsItem.defaultProps = {
  rankingIndex: undefined,
};

function RankingGoodsItem({
  imageSrc,
  subtitle,
  title,
  amount,
  rankingIndex,
  ...rest
}: GoodsItemProps) {
  return (
    <Container {...rest}>
      {rankingIndex !== undefined && (
        <RankingBadge rankingIndex={rankingIndex}>{rankingIndex}</RankingBadge>
      )}
      <Image src={imageSrc} alt={title} />
      <Subtitle>{subtitle}</Subtitle>
      <Title>{title}</Title>
      <Amount>{amount}</Amount>
    </Container>
  );
}

RankingGoodsItem.defaultProps = {
  rankingIndex: 0,
};

export { DefaultGoodsItem, RankingGoodsItem };
