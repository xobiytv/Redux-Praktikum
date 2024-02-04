import { createSlice } from '@reduxjs/toolkit'
import { setItem } from '../helpers/persistance-store'

const initialState = {
    isLoding: false,
    loggedIn: false,
    error: null,
    user: null,
}
export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        signUserStart: state => {
            state.isLoding = true 
        },
        signUserSuccess: (state, user) => {
            state.loggedIn = true
            state.isLoding = false 
            setItem('token', user.payload.token)
            state.user = user.payload
            localStorage.setItem('token', user.payload.token)
            
        },
        signUserFailure: (state, action) => {
            state.isLoding = false 
            state.error = action.payload
        },
        logoutUser: state => {
            state.user = null
            state.loggedIn = false
        }
       
    },
})

export const {signUserStart, signUserSuccess, signUserFailure, logoutUser} = AuthSlice.actions
export default AuthSlice.reducer