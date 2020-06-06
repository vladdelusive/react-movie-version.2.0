import React from 'react'
import BurgerIcon from '../../../images/openBurger.png'
import './Burger.css'

export default function Burger() {
    return (
        <div className="burger">
            <img className="burger__icon" src={BurgerIcon} alt="burger"/>
        </div>
        
    )
}
