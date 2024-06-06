import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';


const Home = () => {
  function handleClick() {
    window.open("/Quiz.jsx");
  }

  return (
    <>
      <div className="cont">
        <h1 className="title">Are You a Wizard?</h1>
        <button className="button" type="submit" onClick={handleClick}>Let's Find Out</button>
      </div>
    </>
  );
}

export default Home;
