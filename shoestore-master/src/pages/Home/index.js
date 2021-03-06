import React, { Component } from "react";

import * as CartActions from "../../store/modules/cart/actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { MdAddShoppingCart } from "react-icons/md";
import { ProductList } from "./styles";

import { formatPrice } from "../../util/format";
import api from "../../services/api";

class Home extends Component {
  state = {
    products: []
  };

  async componentDidMount() {
    const response = await api.get("products");

    // Nao chamamos formatPrice() no render(), para nao roda-lo sempre que renderizar o componente.
    // Melhor chamar ele aqui, ja que o preco do item nao precisa mudar em realtime
    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price)
    }));

    this.setState({ products: data });
  }

  handleAddProduct = product => {
    const { addToCart } = this.props;

    addToCart(product);
  };

  render() {
    const { products } = this.state;
    const { amount } = this.props;

    return (
      <ProductList>
        {products.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} />

            <strong>{product.title}</strong>
            <span>{product.priceFormatted}</span>

            <button
              type="button"
              onClick={() => this.handleAddProduct(product)}
            >
              <div>
                <MdAddShoppingCart size={16} color="#FFF" />
                {amount[product.id] || 0}
              </div>
              <span>ADICIONAR AO CARRINHO</span>
            </button>
          </li>
        ))}
      </ProductList>
    );
  }
}

const mapStateToProps = state => ({
  amount: state.cart.reduce((amount, product) => {
    amount[product.id] = product.amount;

    return amount;
  }, {})
});

// Esta funcao retorna as acoes a serem inseridas em props pelo connect()
const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
