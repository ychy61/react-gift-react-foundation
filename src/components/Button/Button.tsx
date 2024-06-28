/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

// ButtonProps 인터페이스 정의
export interface ButtonProps {
  theme: 'primary' | 'secondary'; // 버튼의 테마 (primary 또는 secondary)
  size: 'small' | 'medium' | 'large' | 'responsive'; // 버튼의 크기 (small, medium, large 또는 responsive)
  children: React.ReactNode; // 버튼 내부의 내용
  onClick: () => void; // 버튼 클릭 시 호출될 함수
}

// styled.button을 사용하여 버튼 스타일 정의
const Button = styled.button<ButtonProps>`
  border: none;
  cursor: pointer;
  font-size: ${(props) => {
    switch (props.size) {
      case 'small':
        return '0.75rem'; // 작은 버튼의 글꼴 크기
      case 'large':
        return '1.25rem'; // 큰 버튼의 글꼴 크기
      case 'responsive':
        return '1rem'; // 반응형 버튼의 글꼴 크기
      default:
        return '1rem'; // 기본 글꼴 크기
    }
  }};
  padding: ${(props) => {
    switch (props.size) {
      case 'small':
        return '0.25rem 0.5rem'; // 작은 버튼의 패딩
      case 'large':
        return '0.75rem 1.5rem'; // 큰 버튼의 패딩
      case 'responsive':
        return '0.5rem 1rem'; // 반응형 버튼의 패딩
      default:
        return '0.5rem 1rem'; // 기본 패딩
    }
  }};
  transition: background-color 0.3s ease; // 배경색 전환 효과
  background-color: ${(props) =>
    props.theme === 'primary' ? '#007bff' : '#6c757d'}; // 테마에 따른 배경색
  color: white; // 글자색

  @media (max-width: 600px) {
    font-size: ${(props) =>
      props.size === 'responsive'
        ? '0.75rem'
        : ''}; // 작은 화면에서 반응형 버튼의 글꼴 크기
    padding: ${(props) =>
      props.size === 'responsive'
        ? '0.25rem 0.5rem'
        : ''}; // 작은 화면에서 반응형 버튼의 패딩
  }
`;

// ButtonComponent 컴포넌트 정의
function ButtonComponent({ theme, size, children, onClick, ...rest }: ButtonProps) {
  return (
    <Button theme={theme} size={size} onClick={onClick} {...rest}>
      {children}
    </Button>
  );
}

export default ButtonComponent; // ButtonComponent를 기본 내보내기로 설정
