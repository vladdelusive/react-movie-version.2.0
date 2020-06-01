import React from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
    return (
        <ul id="pills-tab">
            <li>
                <NavLink id="pills-home-tab" data-toggle="pill" to="/main">Main</NavLink>
            </li>
            <li>
                <NavLink id="pills-profile-tab" data-toggle="pill" to="/popular">Popular</NavLink>
            </li>
            <li>
                <NavLink id="pills-contact-tab" data-toggle="pill" to="/top">Top Rated</NavLink>
            </li>
            <li>
                <NavLink id="pills-contact-tab" data-toggle="pill" to="/actors">Actors</NavLink>
            </li>
        </ul>
    )
}
