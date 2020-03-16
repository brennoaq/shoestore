import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import NewProduct from "./pages/NewProduct";

export default function Routes() {
  return (
    <Switch>
      <ProtectRoute path="/" exact component={Home} />
      <ProtectRoute path="/cart" component={Cart} />
      <Route path="/signup" component={SignUp} />
      <Route path="/login" component={Login} />
      <ProtectRoute path="/new_product" component={NewProduct} />
    </Switch>
  );
}

// Se existe o token, renderiza o componente recebido por props. Senao, redireciona para login
const ProtectRoute = ({ component: Component, roles, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem("token") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{ pathname: "/login", state: { from: props.location } }}
        />
      )
    }
  />
);
