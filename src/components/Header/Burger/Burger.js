import React from 'react'
import BurgerIcon from '../../../images/openBurger.png'
import './Burger.css'
import {SEARCH_BURGER} from '../../../store/SEARCH/actions/actionTypes'

import { useDispatch } from "react-redux";

export default function Burger() {
    const dispatch = useDispatch()
    return (
        <div className="burger" onClick={()=>dispatch({type: SEARCH_BURGER})}>
            <img className="burger__icon" src={BurgerIcon} alt="burger"/>
        </div>
        
    )
}
