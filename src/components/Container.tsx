/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

interface ContainerProps {
  children: React.ReactNode;
  padding?: string;
  maxWidth?: string;
}

const StyledContainer = styled.div<ContainerProps>`
  width: 100%;
  padding: ${(props) => props.padding || '16px'};
  max-width: ${(props) => props.maxWidth || '1200px'};
  margin: 0 auto;
`;

function Container({ children, padding, maxWidth, ...rest }: ContainerProps) {
  return (
    <StyledContainer padding={padding} maxWidth={maxWidth} {...rest}>
      {children}
    </StyledContainer>
  );
}

Container.defaultProps = {
  padding: '16px',
  maxWidth: '1200px',
};

export default Container;
