import React, { useState } from 'react';
import './App.css'; 

const ClickCounterApp = () => {
  // State for counting clicks and handling the input value
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState(0);

  // Handle button click to increment the count
  const handleClick = () => {
    setCount(count + 1);
  };

  // Handle input change to set the counter, ensuring no decimals or negative numbers
  const handleChange = (e) => {
    const value = e.target.value;
    // Only update if it's a valid non-negative integer
    if (/^\d+$/.test(value) || value === '') { // Regular expression to allow only non-negative integers
      setInputValue(value);
      if (value !== '') {
        setCount(Number(value)); // Update count based on input value
      }
    }
  };

  return (
    <div className="counter-container">
      <h1>Click Counter App</h1>
      <p className="click-message">
        You have clicked me {count} {count === 1 ? 'time' : 'times'}.
      </p>
      
      {/* Button to increment the count */}
      <button className="increment-button" onClick={handleClick}>
        Click Me!
      </button>

      {/* Input field to set the counter */}
      <div className="input-section">
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}  // onChange event for input
          className="counter-input"
          placeholder="Set counter"
        />
        <label>Set Counter Value</label>
      </div>
    </div>
  );
};

export default ClickCounterApp;
