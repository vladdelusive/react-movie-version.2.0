import React from 'react'
import  {useSelector} from "react-redux"

import './Header.css'
import Navbar from './Navbar/Navbar'
import Logo from "./Logo/Logo";
import Burger from './Burger/Burger'
import FormSearch from "./FormSearch/FormSearch";

export default function Header() {
    const {inputOpen} = useSelector(({search}) => search);
    return (
        <header className={`header ${inputOpen ? "header__active" : "header__noActive"}`}>
            <div className="header__left">
                <Logo/>
            </div>
            <div className="header__right">
                <FormSearch/>
                <Navbar />
                <Burger/>
            </div>
        </header>
    )
}
