/** @jsxImportSource @emotion/react */
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputComponent, { InputProps } from './Input';

export default {
  title: 'Components/Input',
  component: InputComponent,
  argTypes: {
    inputSize: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'responsive'],
      },
    },
    disabled: {
      control: { type: 'boolean' },
    },
    invalid: {
      control: { type: 'boolean' },
    },
    placeholder: {
      control: { type: 'text' },
    },
  },
} as Meta<typeof InputComponent>;

// 템플릿 정의
const Template: StoryFn<InputProps> = function Template(args) {
  return <InputComponent {...args} />;
};

// Small input 스토리
export const Small = Template.bind({});
Small.args = {
  inputSize: 'small',
  placeholder: 'Small input',
  disabled: false,
  invalid: false,
};

// Medium input 스토리
export const Medium = Template.bind({});
Medium.args = {
  inputSize: 'medium',
  placeholder: 'Medium input',
  disabled: false,
  invalid: false,
};

// Large input 스토리
export const Large = Template.bind({});
Large.args = {
  inputSize: 'large',
  placeholder: 'Large input',
  disabled: false,
  invalid: false,
};

// Responsive input 스토리
export const Responsive = Template.bind({});
Responsive.args = {
  inputSize: 'responsive',
  placeholder: 'Responsive input',
  disabled: false,
  invalid: false,
};

// Disabled input 스토리
export const Disabled = Template.bind({});
Disabled.args = {
  inputSize: 'medium',
  placeholder: 'Disabled input',
  disabled: true,
  invalid: false,
};

// Invalid input 스토리
export const Invalid = Template.bind({});
Invalid.args = {
  inputSize: 'medium',
  placeholder: 'Invalid input',
  disabled: false,
  invalid: true,
};
