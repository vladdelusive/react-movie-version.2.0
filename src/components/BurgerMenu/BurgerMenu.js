import React from "react";
import { NavLink } from "react-router-dom";
import "./BurgerMenu.css";
import CloseBurger from '../../images/closeBurger.png'

import { useSelector, useDispatch } from "react-redux";

import {SEARCH_BURGER} from '../../store/SEARCH/actions/actionTypes'

export default function BurgerMenu() {
  const { burgerActive } = useSelector(({ search }) => search);
  const dispatch = useDispatch()
  const dispatchAction = () => dispatch({type: SEARCH_BURGER})
  return (
    <div
      className={`panel-menu ${burgerActive ? "panel-menu--transform" : ""}`}
    >
      <div className="close-burger" onClick={dispatchAction}>
          <img className="close-burger__icon" src={CloseBurger} alt="close_burger"/>
      </div>
      <ul className="panel-menu__navbar">
        <li className="panel-menu__navbar-item" onClick={dispatchAction}>
          <NavLink exact className="navbar__link" to="/">
            Main
          </NavLink>
        </li>
        <li className="panel-menu__navbar-item" onClick={dispatchAction}>
          <NavLink className="navbar__link" to="/movies">
            Movies
          </NavLink>
        </li>
        <li className="panel-menu__navbar-item" onClick={dispatchAction}>
          <NavLink className="navbar__link" to="/actors">
            Actors
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
