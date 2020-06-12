import React from "react";
import { NavLink } from "react-router-dom";

import { ACSearchClear } from "store/search/actions";
import { useActions } from "hooks/use-actions";
import "./style.css";

export function Navbar() {
  const { ACSearchClear: clearSearch } = useActions({ ACSearchClear });

  return (
    <div className="navbar-wrapper">
      <ul className="navbar">
        <li className="navbar__item" onClick={clearSearch}>
          <NavLink exact className="navbar__link" to="/">
            Main
          </NavLink>
        </li>
        <li className="navbar__item" onClick={clearSearch}>
          <NavLink className="navbar__link" to="/movies">
            Movies
          </NavLink>
        </li>
        <li className="navbar__item" onClick={clearSearch}>
          <NavLink className="navbar__link" to="/actors">
            Actors
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
