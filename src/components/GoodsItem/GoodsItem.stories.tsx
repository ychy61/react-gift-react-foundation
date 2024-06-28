/** @jsxImportSource @emotion/react */
import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import sampleImage from '@images/pic1.png';
import {
  DefaultGoodsItem,
  RankingGoodsItem,
  GoodsItemProps,
} from './GoodsItem';

export default {
  title: 'Components/GoodsItem',
  component: DefaultGoodsItem,
  argTypes: {
    imageSrc: {
      control: 'text',
    },
    subtitle: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    amount: {
      control: 'text',
    },
    rankingIndex: {
      control: { type: 'number', min: 1 },
    },
  },
} as Meta<typeof DefaultGoodsItem>;

// DefaultGoodsItem 템플릿 정의
const DefaultTemplate: StoryFn<GoodsItemProps> = function Template(args) {
  return <DefaultGoodsItem {...args} />;
};

// RankingGoodsItem 템플릿 정의
const RankingTemplate: StoryFn<GoodsItemProps> = function Template(args) {
  return <RankingGoodsItem {...args} />;
};

// Default 형태의 스토리
export const Default = DefaultTemplate.bind({});
Default.args = {
  imageSrc: sampleImage,
  subtitle: 'Subtitle',
  title: 'Title',
  amount: '$100',
};

// Ranking 형태의 스토리
export const Ranking1 = RankingTemplate.bind({});
Ranking1.args = {
  imageSrc: sampleImage,
  subtitle: 'Subtitle',
  title: 'Title',
  amount: '$100',
  rankingIndex: 1,
};

export const Ranking2 = RankingTemplate.bind({});
Ranking2.args = {
  imageSrc: sampleImage,
  subtitle: 'Subtitle',
  title: 'Title',
  amount: '$100',
  rankingIndex: 2,
};

export const Ranking3 = RankingTemplate.bind({});
Ranking3.args = {
  imageSrc: sampleImage,
  subtitle: 'Subtitle',
  title: 'Title',
  amount: '$100',
  rankingIndex: 3,
};

export const Ranking4 = RankingTemplate.bind({});
Ranking4.args = {
  imageSrc: sampleImage,
  subtitle: 'Subtitle',
  title: 'Title',
  amount: '$100',
  rankingIndex: 4,
};
