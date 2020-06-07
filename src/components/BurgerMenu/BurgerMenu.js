import React from "react";
import { NavLink } from "react-router-dom";
import './BurgerMenu.css'

import { useSelector } from "react-redux";

export default function BurgerMenu() {
    const {burgerActive} = useSelector(({ search }) => search);
  return (
    <div className={`panel-menu ${burgerActive ? "panel-menu--transform" : ""}`}>
      <ul className="panel-menu__navbar">
        <li className="panel-menu__navbar-item" onClick={() => {}}>
          <NavLink exact className="navbar__link" to="/">
            Main
          </NavLink>
        </li>
        <li className="panel-menu__navbar-item" onClick={() => {}}>
          <NavLink className="navbar__link" to="/movies">
            Movies
          </NavLink>
        </li>
        <li className="panel-menu__navbar-item" onClick={() => {}}>
          <NavLink className="navbar__link" to="/actors">
            Actors
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
