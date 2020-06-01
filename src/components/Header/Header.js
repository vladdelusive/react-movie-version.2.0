import React from 'react'
import './Header.css'
import Navbar from './Navbar/Navbar'
import image from '../../markup/github.png'

export default function Header() {
    return (
        <nav>
            <Navbar />
            <a style={{margin: 0}} href="https://github.com/vladdelusive">
                <img src={image} className="github" alt="" />
            </a>
        </nav>
    )
}
