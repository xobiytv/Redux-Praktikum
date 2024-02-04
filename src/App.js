import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Main, Login, Register, ArticleDetail, CreateArticle, ArticleEdit } from './componets'
import AuthService from './service/auth'
import { useDispatch } from 'react-redux';
import { signUserSuccess } from './slice/auth';
import { getItem } from './helpers/persistance-store';
import ArticleServise from './service/article';
import { getArtilesFailure, getArtilesStart, getArtilesSuccess } from './slice/article';

function App() {
  const dispatch = useDispatch()

  const getUser = async() => {
    try{
      const response = await AuthService.getUser()
      dispatch(signUserSuccess(response.user))
      console.log(response)
    }catch (error){
      // dispatch(signUserFailure)
      console.log(error);
    }
  }


  return (
    <>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/article/:slug' element={<ArticleDetail />} />
        <Route path='/edit-article/:slug' element={<ArticleEdit />} />
        <Route path='/create-article' element={<CreateArticle />} />
      </Routes>


    </>


  );
}

export default App;
