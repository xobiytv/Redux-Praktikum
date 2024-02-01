import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../helpers/persistance-store';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../slice/auth';
const pages = [

    {
        name: 'Register',
        link: '/register'
    },
    {
        name: 'Login',
        link: '/login'
    },

];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

function ResponsiveAppBar() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const { loggedIn, user } = useSelector(state => state.auth)
    console.log(user);
    const navigator = useNavigate()
    const dispatch = useDispatch()

    const logoutHandle = () => {
        dispatch(logoutUser())
        removeItem('token')
        navigator('/login')
    }  

    return (
        <AppBar position="static">
            <div className='flex justify-around items-center'>
                <Link className='flex items-center' to={'/'}>
                    <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>
                </Link>
                <Toolbar disableGutters>


                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        {/* {loggedIn ? (

                        ): (

                        )} */}
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        LOGO
                    </Typography>


                    <Box sx={{ flexGrow: 0 }}>
                        {loggedIn ? (
                            <div>
                                <Tooltip title="Open settings">
                                    <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                    </IconButton>

                                </Tooltip>
                                <button onClick={logoutHandle} className='btn rounded px-3 ml-3 py-1 border-[1px] active:border-red-500 active:text-red-500'>Logout</button>
                            </div>

                        ) : (
                            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                                {pages.map((page) => (
                                    <Link to={page.link} >
                                        <Button
                                            key={page.name}
                                            onClick={handleCloseNavMenu}
                                            sx={{ my: 2, color: 'white', display: 'block' }}
                                        >
                                            {page.name}

                                        </Button>
                                    </Link>

                                ))}
                            </Box>
                            // <Menu
                            //     sx={{ mt: '45px' }}
                            //     id="menu-appbar"
                            //     anchorEl={anchorElUser}
                            //     anchorOrigin={{
                            //         vertical: 'top',
                            //         horizontal: 'right',
                            //     }}
                            //     keepMounted
                            //     transformOrigin={{
                            //         vertical: 'top',
                            //         horizontal: 'right',
                            //     }}
                            //     open={Boolean(anchorElUser)}
                            //     onClose={handleCloseUserMenu}
                            // >
                            //     {settings.map((setting) => (
                            //         <MenuItem key={setting} onClick={handleCloseUserMenu}>
                            //             <Typography textAlign="center">{setting}</Typography>
                            //         </MenuItem>
                            //     ))}
                            // </Menu>
                        )
                        }


                    </Box>
                </Toolbar>
            </div>
        </AppBar>
    );
}
export default ResponsiveAppBar;