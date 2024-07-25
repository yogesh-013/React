import { useState , useEffect} from 'react'
import authService from './appwrite/auth.js'
import './App.css'
import {login , logout } from './store/authSlice.js'
import {useDispatch} from 'react-redux'
import {Outlet} from 'react-router-dom'
import Header from './components/header/header.jsx'
import Footer from './components/footer/footer.jsx'

function App() {
  const [loading , setLoading] = useState(true)
  const  dispatch = useDispatch()
  useEffect(()=>{
    authService.getCurrentUser()
    .then((userData)=>{
        if(userData){
           dispatch(login(userData))
        }else{
          dispatch(logout())
        }
    }).finally(()=>setLoading(false))
  },[])
  
  
  return !loading ? (
    <>
    <h1>Hello Brother......</h1>
    <div>
      <Header/>
      <Outlet/>
      <Footer/>
    </div>
    </>
    
  ) : (
    <>
    <h1>Load</h1>
    </>
  )
}

export default App
