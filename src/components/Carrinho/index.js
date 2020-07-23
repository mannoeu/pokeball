import React from "react";

import "./style.css";

function Carrinho() {
  return (
    <div className="car fire">
      <div className="products">
        <h3>Carrinho</h3>
        <div className="car-subtotal">
          <div className="product">
            <div className="img-product"></div>
            <span className="muted">R$ 270,00</span>
          </div>
          <div className="product">
            <div className="img-product"></div>
            <span className="muted">R$ 270,00</span>
          </div>
          <div className="product">
            <div className="img-product"></div>
            <span className="muted">R$ 270,00</span>
          </div>
          <div className="product">
            <div className="img-product"></div>
            <span className="muted">R$ 270,00</span>
          </div>
        </div>
      </div>
      <div className="car-info">
        <div className="row-total">
          <div className="column">
            <h4>Total</h4>
          </div>
          <div className="column">
            <div className="value">
              <h4>R$ 270,00</h4>
              <span className="muted">em até 2x sem juros</span>
            </div>
          </div>
        </div>
        <div className="row-payment">
          <button>Finalizar</button>
        </div>
      </div>
    </div>
  );
}

export default Carrinho;
