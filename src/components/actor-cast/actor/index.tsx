import React from 'react'
import { makeImgUrl} from "helpers/make-img-url";
import './style.css'
import {Link} from 'react-router-dom'
import { ICard } from "react-app-env";

export function Actor({path, id, gender, name}: ICard) {
    const image = makeImgUrl(path, {placeholder: gender === 2 ? "male" : "female"})
    return (
        <div className="card-actor">
            <div className="card-actor__photo">
                <Link className="card-actor__photo-img" to={`/actors/${id}`}>
                    <img src={image} alt="actor_image"/>
                </Link>
            </div>
            <div className="card-actor__name">
                <Link className="card-actor__name-link" to={`/actors/${id}`}>
                    <h5 className="card-actor__name-link card-actor__name-link--text">{name}</h5>
                </Link>
            </div>
        </div>
    )
}
