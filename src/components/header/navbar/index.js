import React from "react";
import { NavLink } from "react-router-dom";

import { actions } from "store/search/actions";
import { useActions } from "hooks/use-actions";
import "./style.css";

export function Navbar() {
  const { ACClearInput} = useActions({ ACClearInput: actions.ACClearInput });

  return (
    <div className="navbar-wrapper">
      <ul className="navbar">
        <li className="navbar__item" onClick={ACClearInput}>
          <NavLink exact className="navbar__link" to="/">
            Main
          </NavLink>
        </li>
        <li className="navbar__item" onClick={ACClearInput}>
          <NavLink className="navbar__link" to="/movies">
            Movies
          </NavLink>
        </li>
        <li className="navbar__item" onClick={ACClearInput}>
          <NavLink className="navbar__link" to="/actors">
            Actors
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
