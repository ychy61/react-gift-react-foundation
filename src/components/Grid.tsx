/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

interface GridProps {
  children: React.ReactNode;
  columns: number;
  gap?: string;
}

const GridContainer = styled.div<GridProps>`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  gap: ${(props) => props.gap || '16px'};
`;

function Grid({ children, columns, gap, ...rest }: GridProps) {
  return (
    <GridContainer columns={columns} gap={gap} {...rest}>
      {children}
    </GridContainer>
  );
}

Grid.defaultProps = {
  gap: '16px',
};

export default Grid;
