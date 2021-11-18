import React, { useEffect } from 'react';
import {Typography, Box, Grid, Button} from '@material-ui/core';
import './Home.css';
import TabPostagem from '../../components/postagens/tabpostagem/TabPostagem';
import ModalPostagem from '../../components/postagens/modalPostagem/modalPostagem';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
import { UserState } from '../../store/user/userReducer';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

function Home() {

    let history = useHistory();
    const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
    );
    
    useEffect(() => {
      if (token == "") {
        toast.error('Você precisa estar logado', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme:"colored",
            progress: undefined,
        })
          history.push("/login")
  
      }
  }, [token])

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='texto'>A lua está cheia de mistérios!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='texto'>Compartilhe conosco suas histórias macabras</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                            <ModalPostagem />
                        </Box>
                        <Link to='/postagens' className='text-decorator-none'>
                        <Button variant="outlined" className='botao'>Ver Histórias</Button>
                        </Link>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="https://i.imgur.com/XCiy7lA.jpg" alt="" width="500px" height="500px" />
                </Grid>
                <Grid xs={12} className='post'>
                    <TabPostagem />
                </Grid>
            </Grid>
        </>
    );
}

export default Home;