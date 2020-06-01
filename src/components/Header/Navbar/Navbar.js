import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <ul className="nav nav-pills my-1" id="pills-tab">
            <li className="nav-item">
                <NavLink className="nav-link" id="pills-home-tab" data-toggle="pill" to="/main">Main</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" id="pills-profile-tab" data-toggle="pill" to="/popular">Popular</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" id="pills-contact-tab" data-toggle="pill" to="/top">Top Rated</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" id="pills-contact-tab" data-toggle="pill" to="/actors">Actors</NavLink>
            </li>
        </ul>
    )
}
