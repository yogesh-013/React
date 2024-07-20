import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useSelector } from 'react-redux'
import TodoForm from './components/Form'
import TodoItem from './components/Remove'


function App() {
  const [count, setCount] = useState(0)
  const todos = useSelector(state => state.todos)

  return (
    <>

    <TodoForm/>
     {todos.map((todo)=>{
      return (
        <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
          </div>
      )
     })}
    

    </>
  )
}

export default App
