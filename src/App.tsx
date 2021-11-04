import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/estaticos/navbar/Navbar';
import Footer from './components/estaticos/footer/Footer';
import './App.css';
import Home from './paginas/home/Home';
import Login from './paginas/login/Login';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import ListaTema from './components/temas/listatema/ListaTema';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';

function App() {
  return (
    <Router>
      <Navbar />
        <Switch>
          <div style={{minHeight:'100vh'}}>
          <Route exact path='/'>
              <Login />
            </Route>
            <Route path='/logar'>
              <Login />
            </Route>
            <Route path='/cadastrar'>
              <CadastroUsuario />
            </Route>
            <Route path='/tema'>
              <ListaTema />
            </Route>
            <Route path='/postagens'>
              <ListaPostagem />
            </Route>
            <Route path='/home'>
              <Home />
            </Route>
          </div>
        </Switch>
      <Footer/>
    </Router>
  );
}

export default App;
