import React, { useState } from 'react';
import '@styles/App.css';
import Button from '@components/Button/Button';

function App() {
  const [message, setMessage] = useState('');

  const handleClick = (buttonName: string) => {
    setMessage(`${buttonName} clicked!`);
    console.log(`${buttonName} clicked!`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to Kakao Gift</h1>
        <p>Click the buttons below to see the message</p>
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
