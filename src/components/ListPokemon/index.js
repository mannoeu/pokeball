import React, { useEffect, useContext } from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../../store";

import PokemonCard from "../PokemonCard";

import "./style.css";

function ListPokemon() {
  const store = useContext(StoreContext);

  useEffect(() => {
    store.getPokemon();
  }, [store]);

  return useObserver(() => (
    <div className="grid-pokemon">
      {store.data.map((poke) => (
        <PokemonCard key={poke.pokemon.name} pokemon={poke.pokemon} />
      ))}
    </div>
  ));
}

export default ListPokemon;
