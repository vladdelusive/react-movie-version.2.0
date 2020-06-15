import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { useActions } from "hooks/use-actions";
import { actions } from "store/search/actions";
import CloseBurger from "assets/images/closeBurger.png";

import {Overlay} from "./overlay";
import { DeveloperLink } from "components";

import "./style.css";
 
export function BurgerMenu() {
  const { burgerActive } = useSelector(({ search }) => search);
  const { ACBurgerToggle } = useActions({
    ACBurgerToggle: actions.ACBurgerToggle,
  });
  return (
    <>
      {burgerActive && <Overlay />}
      <div
        className={`panel-menu ${burgerActive ? "panel-menu--transform" : ""}`}
      >
        <DeveloperLink />
        <div className="close-burger" onClick={ACBurgerToggle}>
          <img
            className="close-burger__icon"
            src={CloseBurger}
            alt="close_burger"
          />
        </div>
        <ul className="menu-navbar">
          <li className="menu-navbar__item" onClick={ACBurgerToggle}>
            <NavLink exact className="menu-navbar__link" to="/">
              Main
            </NavLink>
          </li>
          <li className="menu-navbar__item" onClick={ACBurgerToggle}>
            <NavLink className="menu-navbar__link" to="/movies">
              Movies
            </NavLink>
          </li>
          <li className="menu-navbar__item" onClick={ACBurgerToggle}>
            <NavLink className="menu-navbar__link" to="/actors">
              Actors
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
