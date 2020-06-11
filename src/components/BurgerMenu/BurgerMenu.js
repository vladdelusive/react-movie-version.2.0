import React from "react";
import { NavLink } from "react-router-dom";
import "./BurgerMenu.css";
import CloseBurger from "../../assets/images/closeBurger.png";

import { useSelector } from "react-redux";
import { ACSearchBurger } from "../../store/SEARCH/actions/actionCreators";
import { useActions } from "../../store/useActions/decorator";
import Overlay from './Overlay/Overlay'

import {DeveloperLink} from '../DeveloperLink/Footer'

export default function BurgerMenu() {
  const { burgerActive } = useSelector(({ search }) => search);
  const { ACSearchBurger: bindBurger } = useActions({ ACSearchBurger });
  return (
    <>
      { burgerActive && <Overlay/>}
      <div
        className={`panel-menu ${burgerActive ? "panel-menu--transform" : ""}`}
      >
        <DeveloperLink/>
        <div className="close-burger" onClick={bindBurger}>
          <img
            className="close-burger__icon"
            src={CloseBurger}
            alt="close_burger"
          />
        </div>
        <ul className="menu-navbar">
          <li className="menu-navbar__item" onClick={bindBurger}>
            <NavLink exact className="menu-navbar__link" to="/">
              Main
            </NavLink>
          </li>
          <li className="menu-navbar__item" onClick={bindBurger}>
            <NavLink className="menu-navbar__link" to="/movies">
              Movies
            </NavLink>
          </li>
          <li className="menu-navbar__item" onClick={bindBurger}>
            <NavLink className="menu-navbar__link" to="/actors">
              Actors
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}
