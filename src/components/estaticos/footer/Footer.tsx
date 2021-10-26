import React from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Typography, Box, Grid } from '@material-ui/core';

function Footer() {

    return (
        <>
        <Grid container direction="row" justifyContent="center" alignItems="center">
            <Grid alignItems="center" item xs={12}>
                <Box style={{ backgroundColor: "black", height: "120px" }}>
                    <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                        <Typography variant="h5" align="center" gutterBottom style={{ color: "white" }}>Siga-nos nas redes sociais </Typography>
                    </Box>
                    <Box display="flex" alignItems="center" justifyContent="center">
                        <a href="" target="_blank">
                            <FacebookIcon style={{ fontSize: 60, color: "white" }} />
                        </a>
                        <a href="" target="_blank">
                            <InstagramIcon style={{ fontSize: 60, color: "white" }} />
                        </a>
                    </Box>
                </Box>
                <Box style={{ backgroundColor: "black", height: "60px" }}>
                    <Box paddingTop={1}>
                        <Typography variant="subtitle2" align="center" gutterBottom style={{ color: "white" }} >© 2020 Copyright:</Typography>
                    </Box>
                    <Box>
                        <a target="_blank" href="">
                            <Typography variant="subtitle2" gutterBottom style={{ color: "white" }} align="center">Todos os direitos reservados a Bruno Muraro</Typography>
                        </a>
                    </Box>
                </Box>
            </Grid>
        </Grid>
    </>
    )
}

export default Footer;