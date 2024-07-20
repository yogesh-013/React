import { useParams } from "react-router-dom"
function User(){
    const {userId} = useParams()
    return (
        <>
        <div className="bg-gray-500 p-6 text-center text-3xl">User-ID : {userId}</div>
        </>
    )
    }
    export default User 