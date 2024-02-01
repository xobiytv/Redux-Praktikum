import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoding: false,
    articles: [],
    error: null
}
export const articleSlice = createSlice({
    name: 'article',
    initialState,
    reducers: {
        getArtilesStart: state => {
            state.isLoding = true
        },
        getArtilesSuccess: (state, action) => {
            state.isLoding = false
            state.articles = action.payload
        },
        getArtilesFailure: (state, action) => {
            state.error = action.payload
        }
    }
})

export const {getArtilesStart, getArtilesSuccess, getArtilesFailure} = articleSlice.actions
export default articleSlice.reducer