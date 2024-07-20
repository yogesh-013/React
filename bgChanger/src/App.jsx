import {useState} from "react"

function App() {

const [color , setColor ] = useState("olive")
  return (
    <div className = "w-full h-screen "
    style = {{backgroundColor :color}}>
  
      <div className = "fixed flex flex-wrap flex-row justify-center bottom-3 inset-x-0 px-2">
      <div className = "flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
      <button onClick = {()=>setColor("red")} className="outline-none px-4 bg-red-700 rounded-3xl font-semibold shadow-lg">Red</button>
      <button onClick = {()=>setColor("orange")} className="outline-none px-4 bg-orange-700 rounded-3xl font-semibold shadow-lg">Orange</button>
      <button onClick = {()=>setColor("green")} className="outline-none px-4 bg-green-700 rounded-3xl font-semibold shadow-lg">Green</button>
      <button onClick = {()=>setColor("grey")} className="outline-none px-4 bg-slate-700 rounded-3xl font-semibold shadow-lg">Slate</button>
      <button onClick = {()=>setColor("purple")} className="outline-none px-4 bg-purple-700 rounded-3xl font-semibold shadow-lg">Rebeccapurple</button>
      <button onClick = {()=>setColor("black")} className="outline-none px-4 bg-black rounded-3xl font-semibold shadow-lg text-white">Black</button>
      <button onClick = {()=>setColor("yellow")} className="outline-none px-4 bg-yellow-300 rounded-3xl font-semibold shadow-lg">Yellow</button>
      <button onClick = {()=>setColor("white")} className="outline-none px-4 bg-white rounded-3xl font-semibold shadow-lg">White</button></div>
      </div>
    </div>
  )
}

export default App
