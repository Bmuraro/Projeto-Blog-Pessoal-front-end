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
import CadastroPost from './components/postagens/cadastroPost/CadastroPost';
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem';
import DeletarTema from './components/temas/deletarTema/DeletarTema';
import CadastroTema from './components/temas/cadastroTema/CadastroTema';
import { Provider } from 'react-redux';
import store from './store/store';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Provider store={store}>
      <ToastContainer/>
    <Router basename={process.env.PUBLIC_URL}>
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
            <Route exact path='/formularioPostagem'>
            <CadastroPost />
          </Route>
          <Route exact path='/formularioPostagem/:id'>
            <CadastroPost />
          </Route>
          <Route exact path='/formularioTema'>
            <CadastroTema />
          </Route>
          <Route exact path='/formularioTema/:id'>
            <CadastroTema />
          </Route>
          <Route path='/deletarPostagem/:id'>
            <DeletarPostagem />
          </Route>
          <Route path='/deletarTema/:id'>
            <DeletarTema />
          </Route>
          </div>
        </Switch>
      <Footer/>
    </Router>
    </Provider>
  );
}

export default App;
