/** @jsxImportSource @emotion/react */
import React from 'react';
import styled from '@emotion/styled';

// InputProps 인터페이스 정의
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize: 'small' | 'medium' | 'large' | 'responsive'; // input의 크기 (small, medium, large, responsive)
  disabled: boolean; // input의 비활성화 상태
  invalid: boolean; // input의 유효성 상태
}

// styled.input을 사용하여 input 스타일 정의
const Input = styled.input<InputProps>`
  border: 1px solid ${(props) => (props.invalid ? 'red' : '#ccc')}; // 유효하지 않은 경우 빨간색 테두리
  background-color: ${(props) =>
    props.disabled ? '#f2f2f2' : 'white'}; // 비활성화된 경우 회색 배경
  color: ${(props) =>
    props.disabled ? '#a9a9a9' : 'black'}; // 비활성화된 경우 회색 글자색
  font-size: ${(props) => {
    switch (props.inputSize) {
      case 'small':
        return '0.75rem'; // 작은 input의 글꼴 크기
      case 'large':
        return '1.25rem'; // 큰 input의 글꼴 크기
      case 'responsive':
        return '1rem'; // 반응형 input의 글꼴 크기
      default:
        return '1rem'; // 기본 글꼴 크기
    }
  }};
  padding: ${(props) => {
    switch (props.inputSize) {
      case 'small':
        return '0.25rem 0.5rem'; // 작은 input의 패딩
      case 'large':
        return '0.75rem 1.5rem'; // 큰 input의 패딩
      case 'responsive':
        return '0.5rem 1rem'; // 반응형 input의 패딩
      default:
        return '0.5rem 1rem'; // 기본 패딩
    }
  }};
  width: 100%;
  box-sizing: border-box;
  transition:
    border-color 0.3s ease,
    background-color 0.3s ease,
    color 0.3s ease; // 전환 효과

  @media (max-width: 600px) {
    font-size: ${(props) =>
      props.inputSize === 'responsive'
        ? '0.75rem'
        : ''}; // 작은 화면에서 반응형 input의 글꼴 크기
    padding: ${(props) =>
      props.inputSize === 'responsive'
        ? '0.25rem 0.5rem'
        : ''}; // 작은 화면에서 반응형 input의 패딩
  }
`;

// InputComponent 컴포넌트 정의
function InputComponent({
  inputSize = 'medium',
  disabled = false,
  invalid = false,
  ...rest
}: InputProps) {
  return (
    <Input
      inputSize={inputSize}
      disabled={disabled}
      invalid={invalid}
      {...rest}
    />
  );
}

export default InputComponent; // InputComponent를 기본 내보내기로 설정
