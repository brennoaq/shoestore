import React, { Component } from "react";

import { Container } from "./styles";
import api from "../../services/api";

export default class SignUp extends Component {
  state = {
    name: "1", // Foi necessario para nao alterar a rota do backend
    email: "",
    password: ""
  };

  handleButtonPress = async event => {
    const response = await api.post("/users", this.state);

    if (response.status === 200) {
      alert("success");
    } else {
      alert("failed");
    }
  };

  handleInputChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <Container>
        <div>
          <strong> Cadastrar usuario </strong>
          <span>E-mail</span>
          <input
            name="email"
            onChange={this.handleInputChange}
            type="text"
          ></input>
          <span>Senha</span>
          <input
            name="password"
            onChange={this.handleInputChange}
            type="text"
          ></input>
          <button onClick={this.handleButtonPress}>Finalizar cadastro</button>
        </div>
      </Container>
    );
  }
}
