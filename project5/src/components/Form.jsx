import React , {useState} from 'react'
import Todofn from '../context/userContext';

function TodoForm() {
    const [todoMsg , setTodoMsg] = useState("")
    const {addTodo} = Todofn()
const addIt = (e)=>{
    e.preventDefault()
    if(!todoMsg) return 
    addTodo({todo : todoMsg, completed : false})
    setTodoMsg("")
    
}
    return (
        <form onSubmit={addIt} className="flex">
            <input
                value = {todoMsg}
                onChange={(e)=>{
         setTodoMsg(e.target.value)
                }}
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;