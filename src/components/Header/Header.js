import React from 'react'
import './Header.css'
import Navbar from './Navbar/Navbar'
import Logo from "./Logo/Logo";
import Burger from './Burger/Burger'

export default function Header() {
    return (
        <header className="header">
            <Logo/>
            <Navbar />
            <Burger/>
        </header>
    )
}
