import React from "react";
import { NavLink } from "react-router-dom";

import { actions } from "store/search/actions";
import { useActions } from "hooks/use-actions";
import "./style.css";

export const Navbar = React.memo(() => {
  const { clearInput} = useActions(actions);
  return (
    <div className="navbar-wrapper">
      <ul className="navbar">
        <li className="navbar__item" onClick={clearInput}>
          <NavLink exact className="navbar__link" to="/">
            Main
          </NavLink>
        </li>
        <li className="navbar__item" onClick={clearInput}>
          <NavLink className="navbar__link" to="/movies">
            Movies
          </NavLink>
        </li>
        <li className="navbar__item" onClick={clearInput}>
          <NavLink className="navbar__link" to="/actors">
            Actors
          </NavLink>
        </li>
      </ul>
    </div>
  );
})
