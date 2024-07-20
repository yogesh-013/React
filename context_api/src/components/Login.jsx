import React , {useContext , useState} from 'react'
import UserContext from '../context/UserContext'

function Login(){
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')
    const {setUser} = useContext(UserContext)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username})

    }
    return(
   <>
   <div >
   <input type="text" placeholder='Yogesh' onChange={(e)=>setUsername(e.target.value)}/>
   <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}  />
   </div>
   <button type = "submit" onClick={handleSubmit}>Submit</button>
   </>
)
    
}
export default Login