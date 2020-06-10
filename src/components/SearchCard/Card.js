import React from 'react'
import { Link } from "react-router-dom";
import './Card.css'

export default function Card({title, poster, pathTo}) {
    return (
        <div className="card">
            <div className="card__header">
                <Link to={pathTo}>
                    <img src={poster} alt="sorry" />
                </Link>
            </div>
            <div className="card__body">
                <h5 className="card__title">{title}</h5>
            </div>
        </div>
    )
}