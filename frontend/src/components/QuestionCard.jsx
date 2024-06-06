import React, { useState, useEffect } from 'react';

function QuestionCard({ question, level,setCount }) {
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    // Reset the result state when the level changes
    setResult('');
  }, [level]);
 
  const handleAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
    setResult("INCORRECT");
    console.log("incorrect");
  };

  const handleCorrectAnswerChange = (event) => {
    setSelectedAnswer(event.target.value);
    setResult("CORRECT");
    setCount(prevCount => prevCount + 1);
    console.log("correct");
  };

  return (
    <>
    
      <div className="card">
        <div className="card-header">
          <h5 className="card-title">Question ID: {question.id}</h5>
          <h6 className="card-subtitle mb-2 text-muted">Level: {question.level}</h6>
        </div>
        <div className="card-body">
          <p className="card-text">{question.question}</p>
          <form>
            {question.incorrect_answers.map((answer, index) => (
              <div key={index} className="form-check">
                <input
                  type="radio"
                  id={`answer-${index}`}
                  className="form-check-input"
                  name="answer"
                  value={answer}
                  checked={selectedAnswer === answer}
                  onChange={handleAnswerChange}
                />
                <label htmlFor={`answer-${index}`} className="form-check-label">{answer}</label>
              </div>
            ))}
            <div className="form-check">
              <input
                type="radio"
                id={`answer-correct`}
                className="form-check-input"
                name="answer"
                value={question.correct_answer}
                checked={selectedAnswer === question.correct_answer}
                onChange={handleCorrectAnswerChange}
              />
              <label htmlFor={`answer-correct`} className="form-check-label">{question.correct_answer}</label>
            </div>
          </form>
        </div>
      </div>
      <div>
        {result && <h1>{result}</h1>}
      </div>
    </>
  );
}

export default QuestionCard;
