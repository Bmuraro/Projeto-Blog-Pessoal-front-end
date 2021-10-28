import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box } from '@material-ui/core';
import MenuComponent from '../MenuComponent/MenuComponent';
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <>
            <AppBar position="static" className='navbar-color' >
            <Box style={{ cursor: "pointer" }} justifyContent="center">
                        <Typography variant="h5" color="inherit" align='center'>
                            BlogPessoalTeste
                        </Typography>
                    </Box>
                    <Box justifyContent="space-between">
                <Toolbar variant="dense" >
                    <Box display="flex" justifyContent="center"> 
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} className='cursor'>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Link to='/login' className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    logout
                                </Typography>
                            </Box>
                        </Link>
                    </Box>
                    <Box justifyContent="flex-end">
                    <MenuComponent />
                </Box>
                </Toolbar>
                </Box>
                
            </AppBar>
        </>
    )
}


export default Navbar;