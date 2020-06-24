import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import { useActions } from "hooks/use-actions";
import { actions } from "store/search/actions";
import CloseBurger from "assets/images/closeBurger.png";

import {Overlay} from "./overlay";
import { DeveloperLink } from "components/index";

import "./style.css";
 
export function BurgerMenu() {
  const { burgerActive } = useSelector(({ search }) => search);
  const { burgerToggle } = useActions(actions);
  return (
    <>
      {burgerActive && <Overlay />}
      <div
        className={`panel-menu ${burgerActive ? "panel-menu--transform" : ""}`}
      >
        <DeveloperLink />
        <div className="close-burger" onClick={burgerToggle}>
          <img
            className="close-burger__icon"
            src={CloseBurger}
            alt="close_burger"
          />
        </div>
        <ul className="menu-navbar">
          <li className="menu-navbar__item" onClick={burgerToggle}>
            <NavLink exact className="menu-navbar__link" to="/">
              Main
            </NavLink>
          </li>
          <li className="menu-navbar__item" onClick={burgerToggle}>
            <NavLink className="menu-navbar__link" to="/movies">
              Movies
            </NavLink>
          </li>
          <li className="menu-navbar__item" onClick={burgerToggle}>
            <NavLink className="menu-navbar__link" to="/actors">
              Actors
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
