import React from "react";
import { useDispatch } from "react-redux";

import "components/header/burger/style.css";
import BurgerIcon from "assets/images/openBurger.png";
import { SEARCH_BURGER } from "store/search/actions";

export function Burger() {
  const dispatch = useDispatch();
  return (
    <div className="burger" onClick={() => dispatch({ type: SEARCH_BURGER })}>
      <img className="burger__icon" src={BurgerIcon} alt="burger" />
    </div>
  );
}
