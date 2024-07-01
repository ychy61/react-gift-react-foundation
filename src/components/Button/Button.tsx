/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

// ButtonProps 인터페이스 정의
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  // HTML 버튼 요소의 속성을 상속
  theme: 'primary' | 'secondary'; // 버튼의 테마 (primary 또는 secondary)
  size: 'small' | 'medium' | 'large' | 'responsive'; // 버튼의 크기 (small, medium, large 또는 responsive)
  children: React.ReactNode; // 버튼 내부의 내용
}

const sizeMapper = (size: ButtonProps['size']) => {
  switch (size) {
    case 'small':
      return css`
        font-size: 0.75rem;
        padding: 0.25rem 0.5rem;
      `;
    case 'large':
      return css`
        font-size: 1.25rem;
        padding: 0.75rem 1.5rem;
      `;
    case 'responsive':
      return css`
        font-size: 1rem;
        padding: 0.5rem 1rem;

        @media (max-width: 600px) {
          font-size: 0.75rem;
          padding: 0.25rem 0.5rem;
        }
      `;
    default:
      return css`
        font-size: 1rem;
        padding: 0.5rem 1rem;
      `;
  }
};

const themeMapper = (theme: ButtonProps['theme']) => {
  switch (theme) {
    case 'primary':
      return css`
        background-color: #007bff;
        color: white;
      `;
    case 'secondary':
      return css`
        background-color: #6c757d;
        color: white;
      `;
    default:
      return css`
        background-color: #007bff;
        color: white;
      `;
  }
};

// styled.button을 사용하여 버튼 스타일 정의
const Button = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
  ${(props) => sizeMapper(props.size)}
  ${(props) => themeMapper(props.theme)}
`;

// ButtonComponent 컴포넌트 정의
function ButtonComponent({
  theme,
  size,
  children,
  onClick,
  ...rest
}: ButtonProps) {
  return (
    <Button theme={theme} size={size} onClick={onClick} {...rest}>
      {children}
    </Button>
  );
}

export default ButtonComponent; // ButtonComponent를 기본 내보내기로 설정
