import {configureStore} from '@reduxjs/toolkit'
import authReducer from './authSlice.js'
const Store = configureStore({
   reducer : authReducer
})
export default Store