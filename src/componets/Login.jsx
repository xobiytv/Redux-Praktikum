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
import { Input } from '../ui'
import { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import { signUserFailure, signUserStart, signUserSuccess } from '../slice/auth';
import AuthService from '../service/auth';
import { useNavigate } from 'react-router-dom';

function Copyright(props) {
   
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="http://localhost:3000/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

export default function SignIn() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const { isLoding, loggedIn } = useSelector(state => state.auth)
    const navigate = useNavigate()

    const loginHandle = async (e) => {
        e.preventDefault()
        dispatch(signUserStart())
        const user = {email, password}

        try{
            const response = await AuthService.userLogin(user)
            dispatch(signUserSuccess(response.user))
            navigate('/')
        }catch(error){
            dispatch(signUserFailure(error.response.data.errors))
        }
        
        
    }

    console.log(isLoding);
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
                        Sign in
                    </Typography>
                    <ValidationError/>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <Input state={email} type={'email'} setState={setEmail} label={'Email'} />
                        <Input state={password} setState={setPassword} type={'password'} label={'Password'} />


                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={loginHandle}
                            disabled={isLoding}
                        >
                           {isLoding ? 'Loading...' : 'Login'}
                        </Button>
                      
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Copyright sx={{ mt: 8, mb: 4 }} />
            </Container>
        </ThemeProvider>
    );
}