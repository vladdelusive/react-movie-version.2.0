import React, {useState} from 'react'
import {useSelector, useDispatch} from "react-redux";
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import FormSearch from "../FormSearch/FormSearch";
import {HEADER_CLEAR, SEARCH_OFFLOAD} from "../../../store/actions/actionTypes";

export default function Navbar() {
    const inputValue = useSelector(({header}) => header.inputValue);
    const dispatch = useDispatch();
    return (
        <div className="form-wrapper">
            <FormSearch/>
            <ul className="navbar">
                <li className="navbar__item" onClick={() =>{dispatch({type: HEADER_CLEAR})}}>
                    <NavLink exact className="navbar__link" to="/">Main</NavLink>
                </li>
                <li className="navbar__item" onClick={() =>{dispatch({type: HEADER_CLEAR})}}>
                    <NavLink className="navbar__link" to="/movies">Movies</NavLink>
                </li>
                <li className="navbar__item" onClick={() =>{dispatch({type: HEADER_CLEAR})}}>
                    <NavLink className="navbar__link" to="/actors">Actors</NavLink>
                </li>
            </ul>
        </div>
    )
}
