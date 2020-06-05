import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import FormSearch from "../FormSearch/FormSearch";

export default function Navbar() {
    const [inputValue, setInputValue] = useState("")

    return (
        <div className="form-wrapper">
            <FormSearch inputValue={inputValue} setInputValue={setInputValue}/>
            <ul className="navbar">
                <li className="navbar__item" onClick={()=>setInputValue("")}>
                    <NavLink exact className="navbar__link" to="/">Main</NavLink>
                </li>
                <li className="navbar__item" onClick={()=>setInputValue("")}>
                    <NavLink className="navbar__link" to="/movies">Movies</NavLink>
                </li>
                <li className="navbar__item" onClick={()=>setInputValue("")}>
                    <NavLink className="navbar__link" to="/actors">Actors</NavLink>
                </li>
            </ul>
        </div>
    )
}
