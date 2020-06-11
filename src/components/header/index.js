import React from 'react'
import  {useSelector} from "react-redux"

import 'components/header/style.css'
import {Navbar} from 'components/header/navbar'
import {Logo} from "components/header/logo";
import {Burger} from 'components/header/burger'
import {FormSearch} from "components/header/form-search";

export function Header() {
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
