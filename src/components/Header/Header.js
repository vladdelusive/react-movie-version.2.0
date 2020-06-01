import React from 'react'
import './Header.css'
import Navbar from './Navbar/Navbar'
import image from './movie-logo.jpg'
import Logo from "./Logo/Logo";
import FormSearch from "./FormSearch/FormSearch";

export default function Header() {
    return (
        <header className="header">
            <Logo/>
            <Navbar />
        </header>
    )
}
