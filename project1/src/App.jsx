import { useState , useCallback , useRef , useEffect} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [length , setlength] = useState(8)
 const [numberAllowed , setNumber] =  useState(false)
 const [charAllowed , setChar] =  useState(false)
 const [pass , setPass] =  useState("")
 const passwordRef = useRef(null)
  const setpassword = useCallback(()=>{
       let str = "abcdefghijklmnopqrstuvwxyz"
       let n = 26 
       if(numberAllowed){
        str += "0123456789"
        n+= 10
       }
       if(charAllowed){
        str += "!@#$%^*(){}[]|\<>:?"
        n+= 19 
       }
       let pass = "" 
       for (let i = 0; i < length; i++) {
        let random = Math.floor(Math.random()*n)
        pass += str.charAt(random)
        
        
       }
       
       setPass(pass)

  } , [length , numberAllowed , charAllowed ])

  useEffect(()=>{
    setpassword()
  } , 
  [length , numberAllowed , charAllowed])
  const copyToClipboard = function(){
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0 , 7 )

    window.navigator.clipboard.writeText(pass)

  }
  return (
   <>

   
   <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
   <h1 className = " mb-2  text-white text-4xl text-center font-semibold">Password Generator</h1>
   <div className = "flex shadow rounded-lg overflow-hidden mb-4">
    <input ref = {passwordRef} type=" text" value = {pass} readOnly placeholder ="Paassword..."className=' rounded-xl m-2 outline-none w-full py-1 px-3'/>
    <button onClick={copyToClipboard} className='rounded-xl h-10 my-2 bg-blue-700 text-black font-semibold hover:bg-sky-500 focus-visible:bg-white active:outline-8 '>Copy</button>
   </div>
   <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input type="range" min= '6' max = '100' value = {length}  onChange={(e)=>{
      setlength(e.target.value)
    }} />
    <label className='mx-2'>Length : {length}</label>
    <input type="checkbox" onClick={()=>{
      setNumber(!numberAllowed)
    }}/>
    <label className='mx-1'>Number</label>
    <input type="checkbox" onClick={()=>{
      setChar(!charAllowed)
    }}/>
    <label className='mx-1'>Character</label>
   </div>
   </div>
   </>
  )
}

export default App
