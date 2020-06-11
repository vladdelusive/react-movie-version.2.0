import React from "react";
import { useDispatch } from "react-redux";

import "./Burger.css";
import BurgerIcon from "assets/images/openBurger.png";
import { SEARCH_BURGER } from "store/SEARCH/actions/actionTypes";

export default function Burger() {
  const dispatch = useDispatch();
  return (
    <div className="burger" onClick={() => dispatch({ type: SEARCH_BURGER })}>
      <img className="burger__icon" src={BurgerIcon} alt="burger" />
    </div>
  );
}
