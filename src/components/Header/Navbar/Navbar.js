import React from 'react'
import { useDispatch} from "react-redux";
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import FormSearch from "../FormSearch/FormSearch";
import {SEARCH_CLEAR} from "../../../store/SEARCH/actions/actionTypes";

export default function Navbar() {
    const dispatch = useDispatch();
    return (
        <div className="search-wrapper">
            <FormSearch/>
            <ul className="navbar">
                <li className="navbar__item" onClick={() =>{dispatch({type: SEARCH_CLEAR})}}>
                    <NavLink exact className="navbar__link" to="/">Main</NavLink>
                </li>
                <li className="navbar__item" onClick={() =>{dispatch({type: SEARCH_CLEAR})}}>
                    <NavLink className="navbar__link" to="/movies">Movies</NavLink>
                </li>
                <li className="navbar__item" onClick={() =>{dispatch({type: SEARCH_CLEAR})}}>
                    <NavLink className="navbar__link" to="/actors">Actors</NavLink>
                </li>
            </ul>
        </div>
    )
}
