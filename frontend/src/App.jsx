import React from 'react'
import Home from "./components/Home.jsx"
import Quiz from "./components/Quiz.jsx"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';



const App = () => {

  return (
  
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home.jsx" element={<Home />} />
        <Route path="/Quiz.jsx" element={<Quiz />} />
      </Routes>
    </Router>
  );
    
  
}

export default App