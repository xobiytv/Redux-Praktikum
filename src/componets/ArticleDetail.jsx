import React, { useEffect } from 'react'
import { Navbar } from '.'
import { useParams } from 'react-router-dom'
import ArticleServise from '../service/article'
import { useDispatch } from 'react-redux'
import article, { getArticleDetelStart, getArtilesDetelFailure, getArtilesDetelSuccess } from '../slice/article'

export default function ArticleDetail() {
    const { slug } = useParams()
    const dispatch = useDispatch(state => state / article)
    useEffect(() => {
        const getArticleDetail = async () => {
            dispatch(getArticleDetelStart())
            try {
                const response = await ArticleServise.getArticleDetail(slug)
                dispatch(getArtilesDetelSuccess(response.article))
            } catch (error) {
                dispatch(getArtilesDetelFailure())
            }

        }
        getArticleDetail()
    }, [slug])

    return (
        <div>
            <Navbar />
            <h1>
                ID: {slug}
            </h1>
        </div>
    )
}
