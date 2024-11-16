import React, { useState } from "react";
import "./RandomNumberGenerator.css";

const RandomNumberGenerator = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const min = 1;
    const max = 100;
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setRandomNumber(randomNum);
  };

  return (
    <div className="container">
      <h1>Random Number Generator</h1>
      <button className="generate-btn" onClick={generateRandomNumber}>
        Generate Number
      </button>
      {randomNumber !== null && (
        <p className="number-display">
          Your Random Number: <span>{randomNumber}</span>
        </p>
      )}
    </div>
  );
};

export default RandomNumberGenerator;
