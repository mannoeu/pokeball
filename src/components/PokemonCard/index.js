import React, { useContext } from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../../store";
import { formatPrice, generatePrice } from "../../utils/utils";

import "./style.css";

function PokemonCard({ pokemon }) {
  const store = useContext(StoreContext);
  const price = generatePrice();

  return useObserver(() => (
    <div className={`poke-container ${store.type}`}>
      <div className="poke-image">
        <img src="" alt="" />
      </div>
      <div className={`poke-info ${store.type}`}>
        <h1>{pokemon.name}</h1>
        <p>{formatPrice(price)}</p>
      </div>
      <button onClick={() => store.addOnCart({ ...pokemon, price })}>
        Adicionar ao Carrinho
      </button>
    </div>
  ));
}

export default PokemonCard;
