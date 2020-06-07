import React from 'react'
import  {useSelector} from "react-redux"
import './Header.css'
import Navbar from './Navbar/Navbar'
import Logo from "./Logo/Logo";
import Burger from './Burger/Burger'

export default function Header() {
    const {inputOpen} = useSelector(({search}) => search);
    return (
        <header className={`header ${inputOpen ? "header__active" : "header__noActive"}`}>
            <Logo/>
            <Navbar />
            <Burger/>
        </header>
    )
}
