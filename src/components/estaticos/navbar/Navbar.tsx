import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box } from '@material-ui/core';
import MenuComponent from '../MenuComponent/MenuComponent';
import {Link, useHistory} from 'react-router-dom';
import './Navbar.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToken } from '../../../store/tokens/actions';
import { TokenState } from '../../../store/tokens/tokensReducer';
import {toast} from 'react-toastify';

function Navbar() {

    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
        );
    let history = useHistory()
    const dispatch = useDispatch();

    function goLogout(){
        dispatch(addToken(''))
        toast.info('Usuário Deslogado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme:"colored",
            progress: undefined,
        })
        history.push('/logar')
    }

    var navbarComponent;

    if(token!=''){
        navbarComponent = <AppBar position="static" className='navbar-color' >
        <Box style={{ cursor: "pointer" }} justifyContent="center">
                    <Typography variant="h5" color="inherit" align='center'>
                        Relatos Lunaris
                    </Typography>
                </Box>
                <Box justifyContent="space-between">
            <Toolbar variant="dense" >
                <Box display="flex" justifyContent="center"> 
                <Link to='/home' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            home
                        </Typography>
                    </Box>
                    </Link>
                    <Link to='/postagens' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            postagens
                        </Typography>
                    </Box>
                    </Link>
                    <Link to='/tema' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            temas
                        </Typography>
                    </Box>
                    </Link>
                    <Link to='/formularioTema' className='text-decorator-none'>
                    <Box mx={1} className='cursor'>
                        <Typography variant="h6" color="inherit">
                            cadastrar tema
                        </Typography>
                    </Box>
                    </Link>
                        <Box mx={1} className='cursor' onClick={goLogout}>
                            <Typography variant="h6" color="inherit">
                                logout
                            </Typography>
                        </Box>
                </Box>
                <Box justifyContent="flex-end">
                <MenuComponent />
            </Box>
            </Toolbar>
            </Box>
            
        </AppBar>
    }

    return (
        <>
            {navbarComponent}
        </>
    )
}


export default Navbar;