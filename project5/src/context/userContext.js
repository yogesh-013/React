import React , {createContext, useContext} from 'react'
import ThemeFn from '../../../project4/src/context/Context'
const Todo = React.createContext()

const Todofn = ()=>{
    return useContext(Todo)
}
export const TodoProvider = Todo.Provider
export default Todofn

