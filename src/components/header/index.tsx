import React from 'react'
import  {useSelector} from "react-redux"

import './style.css'
import {Navbar} from './navbar'
import {Logo} from "./logo";
import {Burger} from './burger'
import {FormSearch} from "./form-search";
import {IStore} from "react-app-env";

export function Header() {
    const inputOpen = useSelector<IStore>(({search}) => search.inputOpen);
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
