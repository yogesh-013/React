import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Yogi(){
  const ele = "baby"
  return (
    <a href="wwsas">Click Here!!! {ele} </a>
  )
}

const Reajct = {
  type : 'a',
  props : {
      href : 'https://fonts.google.com/',
      target : '_blank'
  },
  children : "Click me to visit Google"

}
const reactEle = React.createElement(
  'a',
  {href : 'nj',
    target : '_blank'
  },
  'Click me please !!!'

)
const ele1 = (
  <a href = "knk" target = "_blank">hi hi hi !!!</a>
)
  

ReactDOM.createRoot(document.getElementById('root')).render(

  <Yogi/>
   
  
)
