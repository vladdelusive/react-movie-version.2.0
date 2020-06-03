import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import FormSearch from "../FormSearch/FormSearch";

export default function Navbar() {
    return (
        <div className="form-wrapper">
            <FormSearch/>
            <ul className="navbar">
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
        </div>
    )
}
