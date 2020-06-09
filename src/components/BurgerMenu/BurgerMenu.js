import React from "react";
import { NavLink } from "react-router-dom";
import "./BurgerMenu.css";
import CloseBurger from '../../images/closeBurger.png'

import { useSelector, useDispatch } from "react-redux";

import {SEARCH_BURGER} from '../../store/SEARCH/actions/actionTypes'
import {ACSearchBurger, ACSearchClear} from '../../store/SEARCH/actions/actionCreators'

export default function BurgerMenu() {
  const { burgerActive } = useSelector(({ search }) => search);
  const dispatch = useDispatch()
  const dispatchAction = () =>{
    dispatch(ACSearchBurger)
    dispatch(ACSearchClear)
  }
  return (
    <div
      className={`panel-menu ${burgerActive ? "panel-menu--transform" : ""}`}
    >
      <div className="close-burger" onClick={dispatchAction}>
          <img className="close-burger__icon" src={CloseBurger} alt="close_burger"/>
      </div>
      <ul className="menu-navbar">
        <li className="menu-navbar__item" onClick={dispatchAction}>
          <NavLink exact className="menu-navbar__link" to="/">
            Main
          </NavLink>
        </li>
        <li className="menu-navbar__item" onClick={dispatchAction}>
          <NavLink className="menu-navbar__link" to="/movies">
            Movies
          </NavLink>
        </li>
        <li className="menu-navbar__item" onClick={dispatchAction}>
          <NavLink className="menu-navbar__link" to="/actors">
            Actors
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
