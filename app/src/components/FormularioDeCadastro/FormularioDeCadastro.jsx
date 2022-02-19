import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material";

function FormularioDeCadastro({ aoEnviar, validarCPF }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(true);
  const [erros, setErros] = useState({ cpf: { valido: true, texto: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        aoEnviar({
          nome,
          sobrenome,
          cpf,
          promocoes,
          novidades,
        });
      }}
    >
      <TextField
        value={nome}
        onChange={(event) => {
          setNome(event.target.value);
        }}
        id="nome"
        label="Nome"
        fullWidth
        margin="normal"
      />
      <TextField
        value={sobrenome}
        onChange={(event) => {
          setSobrenome(event.target.value);
        }}
        id="sobrenome"
        label="Sobrenome"
        fullWidth
        margin="normal"
      />
      <TextField
        onBlur={(event) => {
          const ehValido = validarCPF(cpf);
          setErros({ cpf: ehValido });
        }}
        error={!erros.cpf.valido}
        helperText={erros.cpf.texto}
        value={cpf}
        onChange={(event) => {
          setCpf(event.target.value);
        }}
        id="cpf"
        label="CPF"
        fullWidth
        margin="normal"
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="promocoes"
          />
        }
      />
      <FormControlLabel
        checked={novidades}
        onChange={(event) => {
          setNovidades(event.target.checked);
        }}
        label="Novidades"
        control={<Switch name="novidades" />}
      />

      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default FormularioDeCadastro;
