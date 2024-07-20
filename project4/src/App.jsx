import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { ThemeProvider } from './context/Context'
import ThemeBtn from './components/Btn'
import Card from './components/Card'

function App() {
  const [theme , setTheme] = useState("light")
  const darkTheme= ()=>{
    setTheme("dark")
  }
  const lightTheme= ()=>{
    setTheme("light")
  }
  useEffect(()=>{
    document.querySelector('html').classList.remove("dark" , "light")
    document.querySelector('html').classList.add(theme)
  
  }, [theme])

  

  return (
    <>
      <ThemeProvider value = {{theme , darkTheme , lightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn/>
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card/>
                    </div>
                </div>
            </div>
      </ThemeProvider>
    </>
  )
}

export default App
