import React , { useState  , useEffect} from "react";
import service from "../appwrite/config";
import { PostCard , Container} from "../components";
export default function AllPost(){
    const [posts ,  setPost] = useState([])
    useEffect(()=>{
      service.getPosts([]).then((post)=>{
        if(post){
        setPost(post.documents)
}      })
    },[])
    return (
        <div className = 'w-full py-8'>
            <Container>
                <div className = "flex flex-wrap">
               {posts.map((post)=>(
                <div key = {post.$id} className = 'p-2 w-1/4'>
                 <PostCard {...post}/>
                 </div>
               ))}
                </div>
            </Container>
        </div>
    )
}
