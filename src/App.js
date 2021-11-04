import  React from 'react'
import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { validaCpf, validaSenha } from './models/Cadastro';
import ValidacoesCadastro from './contexts/ValidacoesCadastro';

function App() {
  return (
    <Container maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <ValidacoesCadastro.Provider value={{cpf: validaCpf, senha: validaSenha}}>
        <FormularioCadastro aoEnviar={aoEnviarForm} />
      </ValidacoesCadastro.Provider>

    </Container>
  );
}

function aoEnviarForm(dados){
  console.log(dados)
}

export default App;
