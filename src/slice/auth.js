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
            localStorage.setItem('token', user.payload.token)
            // state.user = user.payload
        },
        signUserFailure: (state, action) => {
            state.isLoding = false 
            state.error = action.payload
        }
       
    },
})

export const {signUserStart, signUserSuccess, signUserFailure} = AuthSlice.actions
export default AuthSlice.reducer