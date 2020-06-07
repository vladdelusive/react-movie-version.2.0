import image from "../movie-logo.jpg";
import React from "react";
import "./Logo.css"

export default function Logo() {
    return (
        <div className={`logo-wrapper`}>
            <a href="https://www.themoviedb.org/">
                <img className="logo__img" src={image} alt="logo"/>
            </a>
        </div>
    )
}