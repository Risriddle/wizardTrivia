import React, { useState } from 'react';
import axios from 'axios';
import QuestionCard from './QuestionCard';

const Quiz = () => {
  const [result, setResponse] = useState(null);
  const [level, setLevel] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false); // State to control overlay display
  const [count, setCount] = useState(0);

  function handleClick() {
    window.open("/Home.jsx");
  }

  function callApi(level) {
    console.log(level);
    axios.post(`http://localhost:5000/quizQues/${level}`)
      .then(response => {
        console.log(response.data.ques);
        setResponse(response.data.ques);
      })
      .catch(error => {
        console.error('There was an error sending the data!', error);
      });
  }

  function handleLevel(newLevel) {
    setLevel(newLevel);
    callApi(newLevel);
    
  }

  function sendResult(){
   
    axios.post(`http://localhost:5000/quizResult`,{count:count})
      .then(response => {
        console.log("sent");
      })
      .catch(error => {
        console.error('There was an error sending the data!', error);
      });
      handleClick()
  }

  return (
    <>
      <div className="container">
        <div>
            <h1>Welcome to the WIZARD Trivia</h1>
          {level === 0 && <button className="button" onClick={() => handleLevel(1)}>START</button>}
          {level > 0 && level <=3 && <button className="button" onClick={() => handleLevel(level + 1)}>NEXT LEVEL</button>}

          {level==4 && <button className="button" onClick={()=>setShowOverlay(true)}>NEXT LEVEL</button>}

          <button className="button back-button" onClick={handleClick}>BACK</button>
        </div>
        {result && !showOverlay && // Render question cards unless overlay is shown
          <>
            <div className="row">
              <h1>LEVEL: {level}</h1>
              {result.map((question, index) => (
                <div key={index} className="col-md-4 mb-4">
                  <QuestionCard question={question} level={level} setCount={setCount} />
                </div>
              ))}
            </div>
          </>
        }
      </div>
      {showOverlay && 
        <div className="overlay">
            
          <h2>Congratulations! You've completed all levels! Your RESULT is:</h2>
          <p>Correct Answers: {count}</p> {/* Display count of correct answers */}
          {count>8 && <h1>YOU ARE A WIZARD!!!!</h1>}
          <button className="button" onClick={sendResult}>Go Back Home</button>
        </div>
      }
    </>
  );
}

export default Quiz;
