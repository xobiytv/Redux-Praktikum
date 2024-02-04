import React, { useEffect, useState } from 'react'
import ArticleForm from './AricleForm'
import ArticleServise from '../service/article'
import { getArticleDetelStart, getArtilesDetelFailure, getArtilesDetelSuccess, postArticleFailure, postArticleStart, postArticleSuccess, } from '../slice/article'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { Navbar } from '.'

export default function ArticleEdit() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [body, setBody] = useState('')
    const dispatch = useDispatch()
    const { slug } = useParams()
    const navigate = useNavigate()
    // const { articleDetail, isLoding } = useSelector(state => state.article)

    useEffect(() => {
        const getArticleDetail = async () => {
            dispatch(getArticleDetelStart())
            try {
                const response = await ArticleServise.getArticleDetail(slug)
                setTitle(response.article.title)
                setDescription(response.article.description)
                setBody(response.article.body)
                dispatch(getArtilesDetelSuccess(response.article))
            } catch (error) {
                dispatch(getArtilesDetelFailure())
            }

        }

        getArticleDetail()
    }, [])

    const formSubmit = async (e) => {
        e.preventDefault()
        const article = { title, description, body }
        dispatch(postArticleStart())
        try {
            const respons = await ArticleServise.editArticle(slug, article)
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
                <h1 className='text-[45px] font-bold'>Edit Article </h1>
                <div className='w-10/12 mx-auto'>
                    <ArticleForm {...formProps} />
                </div>

            </div>
        </div>
    )
}
