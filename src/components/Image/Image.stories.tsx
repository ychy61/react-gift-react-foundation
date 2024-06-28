/** @jsxImportSource @emotion/react */
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import sampleImage from '@images/pic1.png';
import ImageComponent, { ImageProps } from './Image';

export default {
  title: 'Components/Image',
  component: ImageComponent,
  argTypes: {
    ratio: {
      control: {
        type: 'select',
        options: ['square', 16 / 9, 4 / 3, 1.77], // 원하는 비율 추가 가능
      },
    },
    radius: {
      control: {
        type: 'select',
        options: ['circle', 0, 10, 20, 30], // 원하는 반경 추가 가능
      },
    },
    src: {
      control: 'text',
    },
    alt: {
      control: 'text',
    },
  },
} as Meta<typeof ImageComponent>;

// 템플릿 정의
const Template: StoryFn<ImageProps> = function Template(args) {
  return <ImageComponent {...args} />;
};

// 기본 이미지 스토리
export const Default = Template.bind({});
Default.args = {
  src: sampleImage,
  alt: 'Default Image',
  ratio: 16 / 9,
  radius: 0,
};

// Square 이미지 스토리
export const Square = Template.bind({});
Square.args = {
  src: sampleImage,
  alt: 'Square Image',
  ratio: 'square',
  radius: 0,
};

// Circle 이미지 스토리
export const Circle = Template.bind({});
Circle.args = {
  src: sampleImage,
  alt: 'Circle Image',
  ratio: 'square',
  radius: 'circle',
};

// Rounded 이미지 스토리
export const Rounded = Template.bind({});
Rounded.args = {
  src: sampleImage,
  alt: 'Rounded Image',
  ratio: 16 / 9,
  radius: 20,
};

// Custom ratio 이미지 스토리
export const CustomRatio = Template.bind({});
CustomRatio.args = {
  src: sampleImage,
  alt: 'Custom Ratio Image',
  ratio: 4 / 3,
  radius: 0,
};

// Custom radius 이미지 스토리
export const CustomRadius = Template.bind({});
CustomRadius.args = {
  src: sampleImage,
  alt: 'Custom Radius Image',
  ratio: 16 / 9,
  radius: 10,
};
