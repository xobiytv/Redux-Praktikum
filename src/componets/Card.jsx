import React, { useEffect } from 'react';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Loader } from '../ui'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getArtilesFailure, getArtilesStart, getArtilesSuccess } from '../slice/article';
import ArticleServise from '../service/article';
import ArticleCard from './ArticleCard';

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function Album() {
  const { articles, isLoding } = useSelector(state => state.article)
  const { loggedIn, user } = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const getArtiles = async () => {
    dispatch(getArtilesStart())
    try {
      const response = await ArticleServise.getArtiles()
      dispatch(getArtilesSuccess(response.articles))
    } catch (error) {
      dispatch(getArtilesFailure())
      console.log(error, 'artille error');

    }
  }
  useEffect(() => {
    getArtiles()

  }, [])


 

  return (
    <ThemeProvider theme={defaultTheme}>

      <main>
        {/* Hero unit */}

        <Container sx={{ py: 8 }} >
          {isLoding && <Loader />}
          <div className='flex justify-center flex-wrap gap-5'>
            {articles.map(item => (
             <ArticleCard item={item} getArtiles={getArtiles} />

            ))}
          </div>
        </Container>
      </main>
      {/* Footer */}
      <Box sx={{ bgcolor: 'background.paper', p: 6 }} component="footer">
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="text.secondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
