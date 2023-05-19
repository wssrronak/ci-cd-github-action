import './App.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';

function App() {
  const [userName,setUsername] = useState('')

  useEffect(() => {
      getNames();
  },
  []);

  const getNames = async() => {
    const response = await axios.get('/names');
    console.log(response);
    setUsername(response.data)
  }
  return (
    <>
    <h1>My Website</h1>
    <h2>My name is {userName}</h2>
    </>
  );
}

export default App;
