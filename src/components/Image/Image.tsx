/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

// ImageProps 인터페이스 정의
export interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  ratio: number | 'square'; // 이미지 비율 (숫자 또는 'square')
  radius: number | 'circle'; // 모서리 반경 (숫자 또는 'circle')
}

// styled.div을 사용하여 이미지 컨테이너 스타일 정의
const ImageContainer = styled.div<Pick<ImageProps, 'ratio' | 'radius'>>`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding-bottom: ${(props) => {
    if (props.ratio === 'square') return '100%';
    if (typeof props.ratio === 'number') return `${(1 / props.ratio) * 100}%`;
    return '56.25%'; // 기본 16:9 비율
  }};
  border-radius: ${(props) => {
    if (props.radius === 'circle') return '50%';
    if (typeof props.radius === 'number') return `${props.radius}px`;
    return '0';
  }};
`;

// styled.img을 사용하여 이미지 스타일 정의
const StyledImage = styled.img<Pick<ImageProps, 'radius'>>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: ${(props) => {
    if (props.radius === 'circle') return '50%';
    if (typeof props.radius === 'number') return `${props.radius}px`;
    return '0';
  }};
`;

// ImageComponent 컴포넌트 정의
function ImageComponent({ ratio = 16 / 9, radius = 0, ...rest }: ImageProps) {
  return (
    <ImageContainer ratio={ratio} radius={radius}>
      <StyledImage radius={radius} {...rest} />
    </ImageContainer>
  );
}

export default ImageComponent;
