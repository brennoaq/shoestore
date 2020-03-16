import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

import "./config/ReactotronConfig";

import GlobalStyle from "./styles/global";
import Header from "./components/Header";
import Routes from "./routes";

import store from "./store";

function App() {
  return (
    // Tudo que fica dentro do Provider tera acesso ao estado global do redux
    <Provider store={store}>
      {/* Tudo que fica dentro do BrowserRouter tera acesso a nossas rotas. */}
      <BrowserRouter>
        {/* O header fara redirecionamento, entao ele tambem precisa ficar dentro do BrowserRouter */}
        <Header />
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
