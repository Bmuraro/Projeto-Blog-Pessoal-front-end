import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Typography, Box, Grid } from '@material-ui/core';
import './Footer.css';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';

function Footer() {

    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
        );

        var footerComponent;

        if(token!=''){
            footerComponent=  <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box className='box1'>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais: </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="" target="_blank">
                            <FacebookIcon className='icones'/>
                        </a>
                        <a href="" target="_blank">
                            <InstagramIcon className='icones'/>
                        </a>
                    </Box>
                </Box>
                <Box className='box2'>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom className='cor'>© 2020 Copyright:</Typography>
                    </Box>
                    <Box>
                            <Typography variant="subtitle2" gutterBottom className='cor' align="center">Todos os direitos reservados a Bruno Muraro</Typography>
                    </Box>
                </Box>
            </Grid>
        </Grid>
        }

    return (
        <>
       {footerComponent}
    </>
    )
}

export default Footer;