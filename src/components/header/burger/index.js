import React from "react";

import "./style.css";
import BurgerIcon from "assets/images/openBurger.png";
import { actions } from "store/search/actions";
import {useActions} from "hooks/use-actions";

export function Burger() {
  const {burgerToggle } = useActions({
      burgerToggle: actions.burgerToggle
  })
  return (
    <div className="burger" onClick={burgerToggle}>
      <img className="burger__icon" src={BurgerIcon} alt="burger" />
    </div>
  );
}
