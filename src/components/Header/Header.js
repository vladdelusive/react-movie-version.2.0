import React from 'react'
import './Header.css'
import Navbar from './Navbar/Navbar'
import Logo from "./Logo/Logo";

export default function Header() {
    return (
        <header className="header">
            <Logo/>
            <Navbar />
        </header>
    )
}
