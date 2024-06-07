import React, { useState } from 'react';
import Quiz from './Quiz';
import Result from './Result';
import './App.css';

const App = () => {
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [restart, setRestart] = useState(false);

  const handleQuizCompletion = (finalScore) => {
    setScore(finalScore);
    setShowResult(true);
  };

  const handleRestart = () => {
    setShowResult(false);
    setRestart(!restart);
  };

  return (
    <div className="App">
      <h1>Quiz Application</h1>
      {showResult ? (
        <Result score={score} onRestart={handleRestart} />
      ) : (
        <Quiz onComplete={handleQuizCompletion} restart={restart} />
      )}
    </div>
  );
};

export default App;
