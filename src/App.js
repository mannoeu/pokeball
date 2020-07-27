import React from "react";
import { useObserver } from "mobx-react";
import { StoreProvider } from "./store";

import Carrinho from "./components/Carrinho";
import Header from "./components/Header";
import ListPokemon from "./components/ListPokemon";

function App() {
  return useObserver(() => (
    <StoreProvider>
      <Header />
      <div className="container">
        <ListPokemon />
        <Carrinho />
      </div>
    </StoreProvider>
  ));
}

export default App;
