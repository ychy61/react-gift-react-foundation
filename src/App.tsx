/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import '@styles/App.css';
import Button from '@components/Button/Button';
import InputComponent from '@components/Input/Input';
import ImageComponent from '@components/Image/Image';
import {
  DefaultGoodsItem,
  RankingGoodsItem,
} from '@components/GoodsItem/GoodsItem'; // GoodsItem 컴포넌트 import
import styled from '@emotion/styled';
import RyanImage from '@images/pic1.png';

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 150px;
`;

const GoodsContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;

function App() {
  const [message, setMessage] = useState('');
  const [inputValue1, setInputValue1] = useState('');
  const [inputValue2, setInputValue2] = useState('');
  const [inputValue3, setInputValue3] = useState('');
  const [inputValue4, setInputValue4] = useState('');

  const handleClick = (buttonName: string) => {
    setMessage(`${buttonName} clicked!`);
    console.log(`${buttonName} clicked!`);
  };

  const handleInputChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue1(event.target.value);
  };

  const handleInputChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue2(event.target.value);
  };

  const handleInputChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue3(event.target.value);
  };

  const handleInputChange4 = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue4(event.target.value);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Kakao Gift</h1>
        <p>Click the buttons below to see the message</p>

        <InputComponent
          inputSize="small"
          placeholder="Small input"
          value={inputValue1}
          onChange={handleInputChange1}
          disabled={false}
          invalid={false}
        />
        <InputComponent
          inputSize="medium"
          placeholder="Medium input"
          value={inputValue2}
          onChange={handleInputChange2}
          disabled={false}
          invalid={false}
        />
        <InputComponent
          inputSize="large"
          placeholder="Large input"
          value={inputValue3}
          onChange={handleInputChange3}
          disabled={false}
          invalid={false}
        />
        <InputComponent
          inputSize="responsive"
          placeholder="Responsive input"
          value={inputValue4}
          onChange={handleInputChange4}
          disabled={false}
          invalid={false}
        />

        <Button
          theme="primary"
          size="medium"
          onClick={() => handleClick('Primary Button')}
        >
          Primary Button
        </Button>
        <Button
          theme="secondary"
          size="large"
          onClick={() => handleClick('Secondary Button')}
        >
          Secondary Button
        </Button>
        <Button
          theme="primary"
          size="responsive"
          onClick={() => handleClick('Responsive Button')}
        >
          Responsive Button
        </Button>
        {message && <p>{message}</p>}

        <ImageContainer>
          <ImageComponent
            src={RyanImage} // 이미지 경로 사용
            alt="Square image"
            ratio="square"
            radius={0}
          />
          <ImageComponent
            src={RyanImage} // 이미지 경로 사용
            alt="Circle image"
            radius="circle"
            ratio="square"
          />
          <ImageComponent
            src={RyanImage} // 이미지 경로 사용
            alt="Rounded image"
            radius={20}
            ratio={16 / 9}
          />
        </ImageContainer>

        <GoodsContainer>
          <DefaultGoodsItem
            imageSrc={RyanImage}
            subtitle="Default Subtitle"
            title="Default Title"
            amount="$100"
          />
          <RankingGoodsItem
            imageSrc={RyanImage}
            subtitle="Ranking Subtitle 1"
            title="Ranking Title 1"
            amount="$200"
            rankingIndex={1}
          />
          <RankingGoodsItem
            imageSrc={RyanImage}
            subtitle="Ranking Subtitle 2"
            title="Ranking Title 2"
            amount="$300"
            rankingIndex={2}
          />
          <RankingGoodsItem
            imageSrc={RyanImage}
            subtitle="Ranking Subtitle 3"
            title="Ranking Title 3"
            amount="$400"
            rankingIndex={4}
          />
        </GoodsContainer>
      </header>
    </div>
  );
}

export default App;
