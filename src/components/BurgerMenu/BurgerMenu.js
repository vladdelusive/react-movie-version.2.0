import React from "react";
import { NavLink } from "react-router-dom";
import "./BurgerMenu.css";
import CloseBurger from '../../images/closeBurger.png'

import { useSelector, useDispatch } from "react-redux";
import {ACSearchBurger, ACSearchClear} from '../../store/SEARCH/actions/actionCreators'

export default function BurgerMenu() {
  const { burgerActive } = useSelector(({ search }) => search);
  const dispatch = useDispatch()
  const closeBurgerClearInput = () => {
    dispatch(ACSearchBurger())
    dispatch(ACSearchClear())
  }
  return (
    <div
      className={`panel-menu ${burgerActive ? "panel-menu--transform" : ""}`}
    >
      <div className="close-burger" onClick={closeBurgerClearInput}>
          <img className="close-burger__icon" src={CloseBurger} alt="close_burger"/>
      </div>
      <ul className="menu-navbar">
        <li className="menu-navbar__item" onClick={closeBurgerClearInput}>
          <NavLink exact className="menu-navbar__link" to="/">
            Main
          </NavLink>
        </li>
        <li className="menu-navbar__item" onClick={closeBurgerClearInput}>
          <NavLink className="menu-navbar__link" to="/movies">
            Movies
          </NavLink>
        </li>
        <li className="menu-navbar__item" onClick={closeBurgerClearInput}>
          <NavLink className="menu-navbar__link" to="/actors">
            Actors
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
