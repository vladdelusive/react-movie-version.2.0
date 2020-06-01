import React from 'react'
import './Header.css'
import Navbar from './Navbar/Navbar'
import image from '../../markup/github.png'

export default function Header() {
    return (
        <nav className="navbar navbar-light bg-light justify-content-between flex-nowrap">
            <Navbar />
            <a style={{margin: 0}} href="https://github.com/vladdelusive">
                <img src={image} className="github" alt="" />
            </a>
        </nav>
    )
}
