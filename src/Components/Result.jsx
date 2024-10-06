import React, { useState } from 'react'

const Result=()=> {
  const [result,setResult]=useState('')
  const [current_button, setCurrentButton]=useState(0)
  function calculate(val){
    // console.log(result);
    if(val==="=")
                   {                   
                    setResult(eval(result));         
                    setCurrentButton(0);
                }

    
    else{
      
      setResult(result+val)
    }
  }
  return (
    <div>
      <div className='calculator_box'>
      <input type='text' 
      value= {result} 
      readOnly/>
      <input type='text' 
      value={current_button}
      readOnly/>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={1}>1</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={2}>2</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={3}>3</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={"+"}>+</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={4}>4</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={5} >5</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={6} >6</button>      
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={"-"} >-</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={7} >7</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={8} >8</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={9} >9</button>      
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={"*"} >*</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={0} >0</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={"."} >.</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={"="} >=</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={"/"} >/</button>
      <button onClick={()=>{setResult(''); setCurrentButton(0);}}>C</button>
      </div>
    </div>
  )
}

export default Result