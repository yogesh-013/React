import React , {useEffect, useState} from 'react'
import { Container , PostForm } from '../components'
import { useParams , useNavigate} from 'react-router-dom'
import service from '../appwrite/config'
export default function EditPost(){
    const [post , setPost] = useState(null)
    const {slug} = useParams()
    const  navigate = useNavigate()
    useEffect(()=>{
        
      if(slug){service.getPost(slug).then((post)=>{
        if(post){
      setPost(post)
    }
      })}else{
        navigate('/')
      }
    }, [navigate , slug])
    return post?(
        <div className='py-8'>
            <Container>
                <PostForm {...post}/>
            </Container>
        </div>
    ):null

}