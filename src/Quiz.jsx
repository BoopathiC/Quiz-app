import React, { useState, useEffect } from 'react';
import Question from './Question';

const initialQuestions = [
    {
      question: "Who is the Prime Minister of India?",
      options: ["Narendra Modi", "Rahul Gandhi", "Jawaharlal Nehru", "Indira Gandhi"],
      answer: "Narendra Modi"
    },
    {
      question: "Who is the Chief Minister of Tamil Nadu?",
      options: ["Edapadi K. Palanisamy", "Thalapathy Vijay", "Thalapathy Stalin", "Annamalai"],
      answer: "Thalapathy Stalin"
    },
    {
      question: "Who is the President of India?",
      options: ["Ram Nath Kovind", "Narendra Modi", "Sonia Gandhi", "Amit Shah"],
      answer: "Ram Nath Kovind"
    },
  ];
  
      

const shuffleArray = (array) => {
  return array.sort(() => Math.random() - 0.5);
};

const Quiz = ({ onComplete, restart }) => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    setQuestions(shuffleArray([...initialQuestions]));
    setCurrentQuestionIndex(0);
    setScore(0);
  }, [restart]);
  const handleAnswerSelection = (selectedOption) => {
    const currentQuestion = questions[currentQuestionIndex];
    const buttonId = `option-${currentQuestionIndex}-${selectedOption}`;
    const buttonElement = document.getElementById(buttonId);
  
    if (selectedOption === currentQuestion.answer) {
      if (buttonElement) {
        buttonElement.classList.add('correct');
        setTimeout(() => {
          buttonElement.classList.remove('correct');
        }, 1000);
      }
      setScore(score + 1);
    } else {
      if (buttonElement) {
        buttonElement.classList.add('wrong');
        setTimeout(() => {
          buttonElement.classList.remove('wrong');
        }, 1000);
      }
    }
  
    const nextQuestionIndex = currentQuestionIndex + 1;
    if (nextQuestionIndex < questions.length) {
      setCurrentQuestionIndex(nextQuestionIndex);
    } else {
      onComplete(score);
    }
  };
  

  return (
    <div className="Quiz">
      {questions.length > 0 && (
        <Question
          question={questions[currentQuestionIndex]}
          onAnswerSelected={handleAnswerSelection}
          questionIndex={currentQuestionIndex}
        />
      )}
    </div>
  );
};

export default Quiz;
