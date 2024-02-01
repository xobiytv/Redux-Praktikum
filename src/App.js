import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'
import { Main, Login, Register } from './componets'
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

  const getArtiles = async () => {
    dispatch(getArtilesStart())
    try{
      const response = await ArticleServise.getArtiles()
      dispatch(getArtilesSuccess(response.articles))
    }catch (error){
      dispatch(getArtilesFailure())
      console.log(error, 'artille error');

    }
  }
  useEffect(() => {
    const token = getItem('token')
    if(token) {
      getUser()
    }
    getArtiles()
    
   }, [])
  return (
    <>

      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
      </Routes>


    </>


  );
}

export default App;
