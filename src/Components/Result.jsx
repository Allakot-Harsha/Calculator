import React, { useState } from 'react'

const Result=()=> 
  {
  let [result,setResult]=useState('')
  let [current_button, setCurrentButton]=useState(0)
  function calculate(val)
  {
    try
    {
      if(val==="=")
        {                                    
          setResult(eval(result));         
          setCurrentButton(0);
        }
      else
      {
        setResult(result+val)
      }
    }
    catch(error)
    {
      console.log(error);
      setCurrentButton(0);
      setResult(0);
    }
  }
  return (
    <div className="calculate_box">
      <div >
      <input 
      className='text_box'
      type='text' 
      value= {result} 
      readOnly/>
      </div>
      <div>
      <input 
      className='text_box'
      type='text' 
      value={current_button}
      readOnly/>
      </div>
      <div>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={1}>1</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={2}>2</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={3}>3</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={"+"}>+</button>
      </div>
      <div>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={4}>4</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={5} >5</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={6} >6</button>      
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={"-"} >-</button>
      </div>
      <div>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={7} >7</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={8} >8</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={9} >9</button>      
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={"*"} >*</button>
      </div>
      <div>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={0} >0</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={"."} >.</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={"="} >=</button>
      <button onClick={(e)=>{setCurrentButton(e.target.value);calculate(e.target.value)}} value={"/"} >/</button>
      </div>
      <button onClick={()=>{setResult(''); setCurrentButton(0);}}>C</button>
      </div>
  )
}

export default Result