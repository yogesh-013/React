import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [count, setCount] = useState(15)
  function addValue(){
    if(count <20){
    console.log("Added")
    /*  *********************
    this will increase the  count only by 1 because in batch the same thing is repeating so it will considere it only once
    setCount(count+1)
    setCount(count+1)
    setCount(count+1)
    
    */

    setCount((prev)=>prev+1)
    setCount((prev)=>prev+1)
    setCount((prev)=>prev+1)
  }else{
console.log("Count can't be greater than 20");
  }
}
  function removeValue(){
    if(count > 0){
    console.log("Removed")
    setCount(count-1);
    }else{
      console.log("Count can't be less than 0")
    }
  }

  return (
    <>
    <h1>Yogesh and Bhumi</h1>
    <h3>Counter : {count}</h3>
    <button onClick={addValue}>Add : {count}</button>
    <br />
    <button onClick = {removeValue}>Remove : {count}</button>
    </>
   
  )
}

export default App
