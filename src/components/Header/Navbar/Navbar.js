import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import FormSearch from "../FormSearch/FormSearch";

export default function Navbar() {
    return (
        <ul className="navbar">
            <FormSearch/>
            <li className="navbar__item">
                <NavLink exact className="navbar__link" to="/">Main</NavLink>
            </li>
            <li className="navbar__item">
                <NavLink className="navbar__link" to="/movies">Movies</NavLink>
            </li>
            <li className="navbar__item">
                <NavLink className="navbar__link" to="/actors">Actors</NavLink>
            </li>
        </ul>
    )
}
