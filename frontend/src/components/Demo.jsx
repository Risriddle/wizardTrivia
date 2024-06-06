import React from 'react'
import {useState,useEffect} from 'react'

//for http requests
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState('');
  const [response, setResponse] = useState(null);


  const handleSubmit = (event) => {
    event.preventDefault();

    axios.post('http://localhost:5000/home',{data:data} )
      .then(response => {
        console.log(response.data.msg)
        setResponse(response.data.msg);
      })
      .catch(error => {
        console.error('There was an error sending the data!', error);
      });
  };



  return (
    <>
      
      <form method="post" onSubmit={handleSubmit}>
        <h1>Are You a Wizard?</h1>
      {/* <input name="input" placeholder="enter array values" value={data} onChange={(e) => setData(e.target.value)}/> */}
      <button type="submit">Lets Find OUT</button>
        </form>
        {response && <p>{response}</p>}
      
      </>
  )
}

export default Home
