import React, {useState} from 'react'
import { removeTodo , updateTodo} from '../features/todoSlice';
import { useDispatch } from 'react-redux';

function TodoItem({ todo }) {
    const dispatch = useDispatch()
    const deleteIt =  ()=>{
        dispatch(removeTodo(todo.id))
    }
    const [todoMsg , setTodoMsg] = useState(todo.text)
    const [isTodoEditable , setisTodoEditable] = useState(false)
    const changeit = ()=>{
        setisTodoEditable(!isTodoEditable)
        dispatch(updateTodo({id:todo.id , text : todoMsg}))
    }

    return (
        <div
            className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black `}
        >
          
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg `}
                 value = {todoMsg}
                 readOnly = {!isTodoEditable}
                 onChange={(e)=>{
                     setTodoMsg(e.target.value)
                 }}
                
            />
            {/* Edit, Save Button */}
            <button onClick={changeit} 
            >
            {isTodoEditable ? "📁" : "✏️"}
            </button>
            
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
                onClick={deleteIt}
            >
                ❌
            </button>
        </div>
    );
}

export default TodoItem;
