import React, { useState } from 'react'

const Result=()=> {
  const [result,setResult]=useState([])
  const [current_button, setCurrentButton]=useState(0)
  const[final_res, setFinalRes]=useState();
  function calculate(val){
    // if(val==="1" || val==="2"|| val==="3" || val==="4" || val==="5" || val==="6"|| val==="7"|| val==="8"|| val==="9"|| val==="0"|| val===".")
        if(val==="=")
                   {                   
                    setResult([]);         
                    setCurrentButton();
                  setFinalRes();}
                   
          // parseInt(val)
          // console.log(result);
          // if(val==="."){
          //   // console.log(+".")
          //   console.log();
            
          // }
          else{
          
          setResult([(result[result.length-1])+val]);   
          // }
        
          setResult([...result,val])
        }   
    
    // else{
    //   setResult(result+val)
    // }
    if(result.length%3===0){
      let temp_result=result[result.length-3];          
          console.log(result);
      
      switch(result[result.length-2]){
        case "+" : setResult([Number(temp_result)+Number(result[result.length-1]),val]);
                   setFinalRes(result);
                   break;
        case "-" : setResult([Number(temp_result)-Number(result[result.length-1]),val]);
                   setFinalRes(result);
                   break;
        case "*" : setResult([Number(temp_result)*Number(result[result.length-1]),val]);
                   setFinalRes(result);
                   break;
        case "/" : setResult([Number(temp_result)/Number(result[result.length-1]),val]);
                   setFinalRes(result);
                   break;
        
      }}
    
  }
  return (
    <div>
      <div className='calculator_box'>
      <input type='text' 
      value= {final_res} 
      readOnly/>
      <input type='text' 
      value={result}
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
      <button onClick={()=>{setResult([]); setCurrentButton();setFinalRes(result)}}>C</button>
      </div>
    </div>
  )
}

export default Result