import React , {useContext} from 'react'
import User from '../../../project3/src/components/User'

const UserContext = React.createContext()
const ThemeFn = ()=>{
   return  useContext(UserContext)
}
export const  ThemeProvider = UserContext.Provider
export default  ThemeFn

