import { configureStore } from '@reduxjs/toolkit'
import AuthReducer from '../slice/auth'
export default configureStore({
  reducer: {
    AuthReducer, 
    
  },
  devTools: process.env.NODE_ENV !== 'production',
})