import React from 'react';

const Result = ({ score, onRestart }) => {
  return (
    <div className="Result">
      <h2>Quiz Completed!</h2>
      <p>Your score is: {score}</p>
      <button onClick={onRestart}>Restart Quiz</button>
    </div>
  );
};

export default Result;
