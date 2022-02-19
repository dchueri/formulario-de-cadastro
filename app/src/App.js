import { Component } from "react";
import { render } from "react-dom";
import "./App.css";
import FormularioDeCadastro from "./components/FormularioDeCadastro/FormularioDeCadastro";
import { Container, Typography } from "@mui/material";
import "fontsource-roboto";

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" component="h1" align="center">
          Formulário de cadastro
        </Typography>
        <FormularioDeCadastro
          aoEnviar={aoEnviarFormulario}
          validarCPF={validarCPF}
        />
      </Container>
    );
  }
}

function aoEnviarFormulario(dados) {
  console.log(dados);
}

function validarCPF(cpf) {
  if (cpf.length != 11) {
    return { valido: false, texto: "O CPF deve possuir 11 dígitos" };
  } else {
    return { valido: true, texto: "" };
  }
}

export default App;
