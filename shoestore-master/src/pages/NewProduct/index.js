import React, { Component } from "react";
import { withRouter } from "react-router";

import { Container } from "./styles";

import api from "../../services/api";
class Announce extends Component {
  // O proprio backend deve verificar qual usuario publicou o anuncio via token
  state = {
    title: "",
    description: "",
    image: "",
    price: 0
  };

  handleInputChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    });
  };

  handleButtonPress = async event => {
    let { history } = this.props;

    const response = await api.post("/products", this.state);

    if (response.status === 200) {
      alert("Anuncio publicado!");
      history.push("/");
    } else {
      alert("Ta dando alguma coisa errado kk faz de novo");
    }
  };

  render() {
    const { title, image, description, price } = this.state;
    return (
      <Container>
        <div>
          <strong>Publicar Anuncio</strong>
          <span>Titulo:</span>
          <input
            name="title"
            value={title}
            type="text"
            onChange={this.handleInputChange}
          />
          <span>Descricao:</span>
          <textarea
            name="description"
            value={description}
            type="text"
            maxlength={210}
            onChange={this.handleInputChange}
          />
          <span>Url da imagem:</span>
          <input
            name="image"
            value={image}
            type="text"
            onChange={this.handleInputChange}
          />
          <span>Preco:</span>
          <input
            name="price"
            value={price}
            type="number"
            onChange={this.handleInputChange}
          />
          <button type="button" onClick={this.handleButtonPress}>
            Publicar
          </button>
        </div>
      </Container>
    );
  }
}

export default withRouter(Announce);
