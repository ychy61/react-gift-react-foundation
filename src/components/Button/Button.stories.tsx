/** @jsxImportSource @emotion/react */
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import ButtonComponent, { ButtonProps } from './Button';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    theme: {
      control: { type: 'select', options: ['primary', 'secondary'] },
    },
    size: {
      control: {
        type: 'select',
        options: ['small', 'medium', 'large', 'responsive'],
      },
    },
    onClick: { action: 'clicked' },
  },
} as Meta<typeof ButtonComponent>;

// 템플릿 정의
const Template: StoryFn<ButtonProps> = function Template(args) {
  return <ButtonComponent {...args} />;
};

// Primary 버튼 스토리
export const Primary = Template.bind({});
Primary.args = {
  theme: 'primary',
  size: 'medium',
  children: 'Primary Button',
  onClick: () => console.log('Primary Button clicked'),
};

// Secondary 버튼 스토리
export const Secondary = Template.bind({});
Secondary.args = {
  theme: 'secondary',
  size: 'medium',
  children: 'Secondary Button',
  onClick: () => console.log('Secondary Button clicked'),
};

// Small 버튼 스토리
export const Small = Template.bind({});
Small.args = {
  theme: 'primary',
  size: 'small',
  children: 'Small Button',
  onClick: () => console.log('Small Button clicked'),
};

// Large 버튼 스토리
export const Large = Template.bind({});
Large.args = {
  theme: 'primary',
  size: 'large',
  children: 'Large Button',
  onClick: () => console.log('Large Button clicked'),
};

// Responsive 버튼 스토리
export const Responsive = Template.bind({});
Responsive.args = {
  theme: 'primary',
  size: 'responsive',
  children: 'Responsive Button',
  onClick: () => console.log('Responsive Button clicked'),
};
