import React, { useState, useContext } from "react";
import { useObserver } from "mobx-react";
import { formatPrice, toggleCart } from "../../utils/utils";
import { StoreContext } from "../../store/index";

import { FiCheckCircle, FiX } from "react-icons/fi";

import "./style.css";

function Carrinho() {
  const store = useContext(StoreContext);
  const [visibility, setVisibility] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [disabled, setDisabled] = useState(true);

  function purchase() {
    store.checkOut();
    setVisibility(true);
    setTimeout(() => {
      setVisibility(false);
    }, 2400);
  }

  return useObserver(() => (
    <>
      <div className={`cart ${store.type}`}>
        <span className="close" onClick={() => toggleCart()}>
          <FiX />
        </span>
        <div className="products">
          <div className="cart-title">
            <h3>Carrinho</h3>
            <span className="muted">{store.products.length} pokemon</span>
          </div>
          {store.products.length > 0 ? (
            <div className="cart-subtotal">
              {store.products.map((product) => (
                <div className="product">
                  <div className="img-product"></div>
                  <span className="muted">{product.name}</span>
                  <span className="muted">{formatPrice(product.price)}</span>
                </div>
              ))}
            </div>
          ) : (
            <div className="cart-subtotal">
              <span className="muted">Seu carrinho está vazio</span>
            </div>
          )}
        </div>
        <div className="cart-info">
          <div className="row-total">
            <div className="column">
              <h4>Total</h4>
            </div>
            <div className="column">
              <div className="value">
                <h4>{formatPrice(store.amount)}</h4>
                {store.installments > 0 && (
                  <span className="muted">em até 2x sem juros</span>
                )}
              </div>
            </div>
          </div>
          <div className="row-payment">
            <button
              disabled={store.products.length > 0 ? !disabled : disabled}
              onClick={() => purchase()}
            >
              Finalizar
            </button>
          </div>
        </div>
      </div>
      {visibility && (
        <div className="modal-success">
          <div className="content">
            <FiCheckCircle />
            <h1>Compra realizada!</h1>
            <span>Verifique sua pokebola e divirta-se</span>
          </div>
        </div>
      )}
    </>
  ));
}

export default Carrinho;
