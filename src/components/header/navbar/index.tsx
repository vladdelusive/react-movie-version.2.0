import React from "react";
import { NavLink } from "react-router-dom";

import { actions } from "store/search/actions";
import { useActions } from "hooks/use-actions";
import "./style.css";
import {useSelector} from "react-redux";
import {IStore} from "react-app-env";
import {ISearchState} from "store/search/types";

export const Navbar = React.memo(() => {
  const { inputValue } = useSelector<IStore, ISearchState>(({search}) => search)
  const { clearInput } = useActions(actions);
  return (
    <div className="navbar-wrapper">
      <ul className="navbar">
        <li className="navbar__item" onClick={() => !inputValue || clearInput()}>
          <NavLink exact className="navbar__link" to="/">
            Main
          </NavLink>
        </li>
        <li className="navbar__item" onClick={() => !inputValue || clearInput()}>
          <NavLink className="navbar__link" to="/movies">
            Movies
          </NavLink>
        </li>
        <li className="navbar__item" onClick={() => !inputValue || clearInput()}>
          <NavLink className="navbar__link" to="/actors">
            Actors
          </NavLink>
        </li>
      </ul>
    </div>
  );
})
