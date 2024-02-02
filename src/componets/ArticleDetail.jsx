import React, { useEffect } from 'react'
import { Navbar } from '.'
import { useParams } from 'react-router-dom'
import ArticleServise from '../service/article'
import { useDispatch, useSelector } from 'react-redux'
import { getArticleDetelStart, getArtilesDetelFailure, getArtilesDetelSuccess } from '../slice/article'
import moment from 'moment'
import { Loader } from '../ui'

export default function ArticleDetail() {
    const { slug } = useParams()
    const dispatch = useDispatch()
    const { articleDetail, isLoding } = useSelector(state => state.article)
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

   // ...

return isLoding ? (<Loader />) : articleDetail === null ? (
    <div>
        <Navbar />
        <div className='flex justify-center items-center '>
            <div className='w-9/12 '>
                <h1 className='text-[46px] font-bold'>Loading...</h1>
            </div>
        </div>
    </div>
) : (
    <div>
        <Navbar />
        <div className='flex justify-center items-center '>
            <div className='w-9/12 '>
                <h1 className='text-[46px] font-bold'>{articleDetail.title}</h1>
                <p className='text-2xl'>{articleDetail.description}</p>
                <div className='flex gap-6'>
                    <p><span className='font-bold'>Create at:</span> {moment(articleDetail.createdAt).format('lll')}</p>
                </div>
                <div>
                    <p>{articleDetail.body}</p>
                </div>
            </div>
            <div>{/* Boshqa narsalar */}</div>
        </div>
    </div>
);
 
    
}
