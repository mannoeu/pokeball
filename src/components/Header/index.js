import React from "react";
import { FiSearch } from "react-icons/fi";

import logo from "../../assets/logo.svg";

import "./style.css";

function Header() {
  return (
    <header>
      <img src={logo} alt="Pokeball" />
      <div className="menu-items">
        <div className="menu-item">
          <input
            type="search"
            name="search"
            id="search"
            placeholder="Search pokémon..."
          />
          <label htmlFor="search">
            <FiSearch />
          </label>
        </div>
        <div className="menu-item">
          <button className="category fire">Fire</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
