/** @jsxImportSource @emotion/react */
import React, { useState } from 'react';
import '@styles/App.css';
import Button from '@components/Button/Button';
import InputComponent from '@components/Input/Input';

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
      </header>
    </div>
  );
}

export default App;
