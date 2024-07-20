import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import User from './components/User.jsx'
import Github from './components/Github.jsx'
import GithubInfoLoader from './components/gitInfo.js'
import {Route , RouterProvider , createBrowserRouter , createRoutesFromElements} from 'react-router-dom'


/* const router = createBrowserRouter(
  [
   {
    path : '/',
    element  : <Layout/> , 
    children : [
      {
        path : "",
        element : <Home/>
      },
      {
    path : 'about',
    element : <About/>
      },
      {
        path : 'conatct',
        element : <Contact/>
          },

    ]

   }
  ]
)
 */
const router = createBrowserRouter(
  createRoutesFromElements(
   <Route path = '/' element = {<Layout/>}>
    <Route path = "" element = {<Home/>}/>
    <Route path = 'about' element = {<About/>}/>
    <Route path = 'contact' element = {<Contact/>}/>
    <Route path = 'user/:userId' element = {<User/>}/>
    <Route 
    loader = {GithubInfoLoader}
    path = 'github'
    element ={<Github/>}/>
   </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router = {router}/>
  </React.StrictMode>,
)
