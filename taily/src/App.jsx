import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from '/src/card.jsx'

function App() {
  const [count, setCount] = useState(0)
const obj = {
 text : "People who made it possible !!! ",
 id : 543 

}
const obj1 = {
  text :  "People who made it actually impossible" ,
  id : 980 

}
  return (
    <>
    <h1 className= "bg-slate-300 text-green-950 p-4 rounded-2xl font-bold mb-3 ">Tailwind CSS</h1>
   <Card name = "Yogesh" myObj = {obj}/>
   <Card myObj = {obj1}/>
</>
  )
}

export default App
