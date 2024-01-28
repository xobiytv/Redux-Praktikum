import { createSlice } from '@reduxjs/toolkit'

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
        //login
        loginUserStart: state => {
            state.isLoding = true 
        },
        loginUserSuccess: state => {},
        loginUserFailure: state => {},

        //reguster
        registerUserStart: state => {
            state.isLoding = true 
        },
        registerUserSuccess: state => {
            state.loggedIn = true
            state.isLoding = false 
        },
        registerUserFailure: state => {
            state.isLoding = false 
            state.error = "error"
        },
    },
})

export const {loginUserStart, loginRegisterStart, registerUserStart, registerUserSuccess, registerUserFailure } = AuthSlice.actions
export default AuthSlice.reducer