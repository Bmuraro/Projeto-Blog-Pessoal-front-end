import React from 'react';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { Box } from '@material-ui/core';
import MenuComponent from '../MenuComponent/MenuComponent';

function Navbar() {
    return (
        <>
            <AppBar position="static" color="secondary" >
            <Box style={{ cursor: "pointer" }} justifyContent="center">
                        <Typography variant="h5" color="inherit">
                            BlogPessoalTeste
                        </Typography>
                    </Box>
                    <Box justifyContent="space-between">
                <Toolbar variant="dense" >
                    
                    <Box display="flex" justifyContent="center">
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                home
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                postagens
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                temas
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
                            <Typography variant="h6" color="inherit">
                                cadastrar tema
                            </Typography>
                        </Box>
                        <Box mx={1} style={{ cursor: "pointer" }}>
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
        </>
    )
}


export default Navbar;