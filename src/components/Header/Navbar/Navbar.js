import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import {ACSearchClear} from '../../../store/SEARCH/actions/actionCreators'
import {useActions} from "../../../store/useActions/decorator";

export default function Navbar() {
    const {
        ACSearchClear: bindClear,
    } = useActions({ACSearchClear})
    
    return (
        <div className="navbar-wrapper">
            <ul className="navbar">
                <li className="navbar__item" onClick={bindClear}>
                    <NavLink exact className="navbar__link" to="/">Main</NavLink>
                </li>
                <li className="navbar__item" onClick={bindClear}>
                    <NavLink className="navbar__link" to="/movies">Movies</NavLink>
                </li>
                <li className="navbar__item" onClick={bindClear}>
                    <NavLink className="navbar__link" to="/actors">Actors</NavLink>
                </li>
            </ul>
        </div>
    )
}
