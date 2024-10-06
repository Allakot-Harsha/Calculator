import React, { useState } from 'react'
import './App.css';
import Result from './Components/Result';
function App() {
  const [result,setResult] = useState([0]);
  const getNumber = (n) =>{
    setResult(n)
    console.log(n);
    
  };
  return (
    <Result/>
  ) 
}

export default App