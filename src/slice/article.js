import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    isLoding: false,
    articles: [],
    articleDetail: null,
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
        },

        getArticleDetelStart: state => {
            state.isLoding = true
        },
        getArtilesDetelSuccess: (state, action) => {
            state.isLoding = false
            state.articleDetail = action.payload
        },
        getArtilesDetelFailure: state => {
            state.isLoding = false
        },
        postArticleStart: state => {
            state.isLoding = true
        },
        postArticleSuccess: state => {
            state.isLoding = false
        },
        postArticleFailure: state => {
            state.isLoding = false
            state.error = "Error"
            console.log(state.error);
        },

    }
})

export const {
    getArtilesStart, getArtilesSuccess, getArtilesFailure,
    getArticleDetelStart, getArtilesDetelSuccess, getArtilesDetelFailure,
    postArticleStart, postArticleSuccess, postArticleFailure
} = articleSlice.actions
export default articleSlice.reducer