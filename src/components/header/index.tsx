import React from 'react'
import  {useSelector} from "react-redux"

import './style.css'
import {Navbar} from './navbar'
import {Logo} from "./logo";
import {Burger} from './burger'
import {FormSearch} from "./form-search";

interface RootState {
    inputOpen: boolean
}

export function Header() {
    const inputOpen = useSelector(({search}: {search: RootState}) => search.inputOpen);
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
