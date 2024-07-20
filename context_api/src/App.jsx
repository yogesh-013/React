import { useState } from 'react'

import ContextProvider from './context/userContextProvider'
import Login from './components/Login'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ContextProvider>
        <Login/>
        <Card/>
      </ContextProvider>
    </>
  )
}

export default App
