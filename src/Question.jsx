import React from 'react';

const Question = ({ question, onAnswerSelected, questionIndex }) => {
  return (
    <div className="Question">
      <h2>{question.question}</h2>
      <ul>
        {question.options.map((option, index) => (
          <li key={index}>
            <button id={`option-${questionIndex}-${option}`} onClick={() => onAnswerSelected(option)}>
              {option}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Question;
