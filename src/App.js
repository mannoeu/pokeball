import React from "react";
import { useObserver } from "mobx-react";
import { StoreProvider } from "./store";

import Carrinho from "./components/Carrinho";
import Header from "./components/Header";

function App() {
  return useObserver(() => (
    <StoreProvider>
      <Header />
      <Carrinho />
    </StoreProvider>
  ));
}

export default App;
