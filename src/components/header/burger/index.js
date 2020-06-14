import React from "react";

import "./style.css";
import BurgerIcon from "assets/images/openBurger.png";
import { ACSearchBurgerToggle } from "store/search/actions";
import {useActions} from "hooks/use-actions";

export function Burger() {
  const {ACSearchBurgerToggle: toggleBurger } = useActions({ACSearchBurgerToggle })
  return (
    <div className="burger" onClick={toggleBurger}>
      <img className="burger__icon" src={BurgerIcon} alt="burger" />
    </div>
  );
}
