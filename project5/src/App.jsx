import { useEffect, useState } from 'react'
import { TodoProvider } from './context/userContext'
import TodoForm from './components/Form'
import TodoItem from './components/Items'

function App() {
  const [todos , setTodos] = useState([])
  const addTodo = (todo)=>{
    if(todo.todo){
     setTodos((prev)=>[{ id : Date.now() ,  ...todo} , ...prev])
    }
  }
  const updateTodo = (todo , id)=>{
    setTodos((prev)=>{
      return  prev.map((todos)=>{
      if(todos.id === id){
        return todo 
               
      }else{
  return todos 
      }
    })
    })
  }
  const removeTodo = (id)=>{
   setTodos((prev)=>{
    return prev.filter((todos)=>todos.id !== id)
   })
  }
  const changeComplete = (id)=>{
    setTodos((prev)=>
      {return prev.map((prevTodo) => 
        prevTodo.id === id ? { ...prevTodo, 
          completed: !prevTodo.completed } : prevTodo)}
    )
  }
  useEffect(()=>{
   const todos1 =  JSON.parse(localStorage.getItem("todoss"))
   if(todos1 && todos1.length >0){
    setTodos(todos1)
   }

  } , [])
  useEffect(()=>{
    console.log(todos)
     localStorage.setItem("todoss" , JSON.stringify(todos))
  } , [todos])
  return (
    <>
    <TodoProvider value = {{todos, addTodo , removeTodo , updateTodo , changeComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                    {todos.map((todo) => {
                      
                      return(
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
)})}
                    </div>
                </div>
            </div>
            </TodoProvider>
    </>
  )
}

export default App
