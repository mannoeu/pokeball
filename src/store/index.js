import React, { createContext } from "react";
import { useLocalStore } from "mobx-react";

export const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const store = useLocalStore(() => ({
    amount: 0,
    products: [],
    installments: 1,

    addOnCart: (product) => {
      store.products.push(product);
      this.subTotal();
      this.calculateInstallments();
    },

    subTotal: () => {
      const allPricesProductsOnCart = store.products.map(
        (product) => product.price
      );
      store.amount = allPricesProductsOnCart.reduce((acc, cur) => acc + cur);
      return store.mount;
    },

    cleanCart: () => {
      store.products = [];
      store.amount = 0;
    },

    calculateInstallments: () => {
      if (store.amount > 200) {
        store.installments = 2;
      }
    },
  }));

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};
