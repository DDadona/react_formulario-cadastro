import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({ aoEnviar }) {
    const [cep, setCep] = useState("")
    const [endereco, setEndereco] = useState("")
    const [numero, setNumero] = useState("")
    const [cidade, setCidade] = useState("")
    const [estado, setEstado] = useState("")
  
    return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({cep, endereco, numero, cidade, estado});
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          event.preventDefault();
          setCep(event.target.value);
        }}
        id="cep"
        label="CEP"
        type="number"
        required
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={endereco}
        onChange={(event) => {
          event.preventDefault();
          setEndereco(event.target.value);
        }}
        id="endereco"
        label="Endereço"
        type="text"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={numero}
        onChange={(event) => {
          event.preventDefault();
          setNumero(event.target.value);
        }}
        id="numero"
        label="Numero"
        type="number"
        required
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={cidade}
        onChange={(event) => {
          event.preventDefault();
          setCidade(event.target.value);
        }}
        id="cidade"
        label="Cidade"
        type="text"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={estado}
        onChange={(event) => {
          event.preventDefault();
          setEstado(event.target.value);
        }}
        id="estado"
        label="Estado"
        type="text"
        required
        variant="outlined"
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar Cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
