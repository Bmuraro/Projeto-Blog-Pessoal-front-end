import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography, Box } from '@material-ui/core';
import { TabContext, TabPanel } from '@material-ui/lab';
import ListaPostagem from '../listapostagem/ListaPostagem';
import './TabPostagem.css';


function TabPostagem() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className='navbar-color'>
          <Tabs centered indicatorColor="primary" onChange={handleChange}>
            <Tab label="Todas as postagens" value="1"/>
            <Tab label="Sobre-nós" value="2" />
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaPostagem />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
          <Typography variant="body1" gutterBottom color="textPrimary" align="justify">Somos um grupo de apreciadores de histórias de terror ao luar. Temos essa plataforma para que vocês possam compartilhar conosco e com o universo suas experiências mais assustadoras! Se são verídicos ou não, os relatos lunares descritos aqui? Bem... talvez seja melhor não sabermos. Venha, junte-se a nós e eternize o seu relato conosco!  </Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabPostagem;