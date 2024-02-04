import React, { useState } from 'react'
import Navbar from './Navbar'
import ArticleForm from './AricleForm'
import ArticleServise from '../service/article'
import { useDispatch } from 'react-redux'
import { postArticleFailure, postArticleStart, postArticleSuccess } from '../slice/article'
import { useNavigate } from 'react-router-dom'
export default function CreateArticle() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()


    const formSubmit = async (e) => {
        e.preventDefault()
        const article = { title, description, body }
        dispatch(postArticleStart())
        try {
            const respons = await ArticleServise.postArticle(article)
            dispatch(postArticleSuccess())
            console.log(respons);
            navigate('/')
        } catch (error) {
            dispatch(postArticleFailure())
            console.log(error);
        }

    }
    const formProps = { title, setTitle, description, setDescription, body, setBody, formSubmit }

    return (
        <div>
            <Navbar />
            <div className='text-center'>
                <h1 className='text-[45px] font-bold'>CreateArticle</h1>
                <div className='w-10/12 mx-auto'>
                    <ArticleForm {...formProps} />
                </div>

            </div>

        </div>
    )
}
