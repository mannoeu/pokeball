import React, { useState, useContext } from "react";
import { useObserver } from "mobx-react";
import { StoreContext } from "../../store";
import { FiSearch } from "react-icons/fi";

import logo from "../../assets/logo.svg";

import "./style.css";

function Header() {
  const store = useContext(StoreContext);
  const [search, setSearch] = useState("");

  function handleFiltered(e) {
    e.preventDefault();
    setSearch("");
    store.filteredPokemon(search);
  }

  return useObserver(() => (
    <header>
      <img src={logo} alt="Pokeball" />
      <div className="menu-items">
        <div className="menu-item">
          <form onSubmit={handleFiltered}>
            <input
              type="search"
              name="search"
              id="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search pokémon..."
            />
          </form>
          <label htmlFor="search">
            <FiSearch />
          </label>
        </div>
        <div className="menu-item">
          <button
            className={`category ${store.type}`}
            onClick={() => store.changeType()}
          >
            {store.type}
          </button>
        </div>
      </div>
    </header>
  ));
}

export default Header;
