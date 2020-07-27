import React, { createContext } from "react";
import { useLocalStore } from "mobx-react";

import api from "../services/api";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    amount: 0,
    products: [],
    installments: 0,
    data: [],
    type: "fire",

    addOnCart: (product) => {
      store.products.push(product);
      store.subTotal();
      store.calculateInstallments();
    },

    subTotal: () => {
      const allPricesProductsOnCart = store.products.map(
        (product) => product.price
      );
      store.amount = allPricesProductsOnCart.reduce((acc, cur) => acc + cur);
      return store.mount;
    },

    checkOut: () => {
      store.products = [];
      store.amount = 0;
    },

    calculateInstallments: () => {
      if (store.amount > 200) {
        store.installments = 2;
      }
    },

    getPokemon: async () => {
      const res = await api.get(`/type/${store.type}`);
      store.data.push(...res.data.pokemon);
    },

    // arrumar
    filteredPokemon: async (value) => {
      await store.getPokemon();

      try {
        const filtered = store.data.filter((poke) =>
          poke.pokemon.name.includes(value.toLowerCase())
        );
        store.data = [];
        store.data.push(...filtered);
      } catch (err) {
        throw err;
      }
    },

    changeType: async () => {
      store.type === "fire" ? (store.type = "water") : (store.type = "fire");
      store.data = [];
      await store.getPokemon();
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
