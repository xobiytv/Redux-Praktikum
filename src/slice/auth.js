import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoding: false,
    isLoggedIn: false,
    user: null,
}
export const AuthSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginUserStart: state => {
            state, isLoding = true
        },
        loginUSerSuccess: state => {},
        loginUserFailure: state => {},
    }
})

export const {loginUserStart} = AuthSlice.actions
export default AuthSlice.reducers