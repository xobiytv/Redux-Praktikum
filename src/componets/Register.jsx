import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Navbar, ValidationError } from '.';
import { Input } from '../ui';
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import {signUserFailure, signUserStart, signUserSuccess } from '../slice/auth';
import AuthService from '../service/auth';
import { useNavigate } from 'react-router-dom';
const defaultTheme = createTheme();

export default function SignUp() {
  // const [] = useState({fitrstname: '', lastname: '', username: '', email: '', password: ''})
  // const [fName, setFName] = useState('')
  // const [lName, setLName] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const { isLoding, loggedIn } = useSelector(state => state.auth)
  const navigate = useNavigate()

  const registerHandle = async(e) => {
    e.preventDefault()
    dispatch(signUserStart())
    const user = {username: name, email, password}
    try {
      const response = await AuthService.userRegister(user)
      console.log(response.user);
      console.log(user);
      navigate('/login')
      dispatch(signUserSuccess(response.user))
    } catch (error) {
      dispatch(signUserFailure(error.response.data.errors))
    }



  }

  useEffect(() => {
    if(loggedIn) navigate('/')
  }, [loggedIn])



  return (
    <ThemeProvider theme={defaultTheme}>
      <Navbar />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <ValidationError/>
          <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              {/* <Grid item xs={12} sm={6}>
                <Input state={fName} setState={setFName} label={'Fits Name'} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <Input state={lName} setState={setLName} label={'Last Name'} />
              </Grid> */}

              <Input state={name} type='text' setState={setName} label={'Username'} />
              <Input state={email} type={'email'} setState={setEmail} label={'Email'} />
              <Input state={password} setState={setPassword} type={'password'} label={'Password'} />

            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={registerHandle}
              disabled={isLoding}
            >
              {isLoding ? 'Loading...' : 'Register'}
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

      </Container>
    </ThemeProvider>
  );
}