import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Box, Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import './ListaPostagem.css';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/user/userReducer';
import { toast } from 'react-toastify';

function ListaPostagem() {

  const [posts, setPosts] = useState<Postagem[]>([])
  let history = useHistory()

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
    );
  const tipo = useSelector<UserState, UserState["tipos"]>(
      (state) => state.tipos
    );

  useEffect(()=>{
    if(token==''){
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
      history.push('/logar')
    }
  }, [token])

  async function getPost(){
    await busca('/postagens', setPosts, {
      headers:{'Authorization': token}
    })
  }

  useEffect (()=>{
    getPost()
  },[posts.length])

  return (
    <>
    {
      posts.map(post =>(
      <Box m={2} >
        <Card variant="outlined">
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Postagens
            </Typography>
            <Typography variant="h5" component="h2">
              {post.titulo}
            </Typography>
            <Typography variant="body2" component="p">
              {post.texto}
            </Typography>
            <Typography variant="body2" component="p">
              {post.tema?.descricao}
            </Typography>
          </CardContent>
          <CardActions>
            <Box display="flex" justifyContent="center" mb={1.5}>

              <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                <Box mx={1}>
                  <Button variant="contained" className="marginLeft" size='small' color="primary" >
                    atualizar
                  </Button>
                </Box>
              </Link>
              <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                <Box mx={1}>
                  <Button variant="contained" size='small' color="secondary">
                    deletar
                  </Button>
                </Box>
              </Link>
            </Box>
          </CardActions>
        </Card>
      </Box>
      ))
      }
    </>)
}

export default ListaPostagem;