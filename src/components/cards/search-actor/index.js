import React from 'react'
import {Link} from 'react-router-dom'

import { makeImgUrl } from 'helpers/make-img-url'
import { CARD_SIZE } from "constants/cards";

export const SearchCard = ({path, id, gender, name}) => {
    const image = makeImgUrl(path, CARD_SIZE , gender)
    return (
        <div className="card">
            <div className="card__header">
                <Link to={`/actors/${id}`}>
                    <img src={image} alt="actor_image"/>
                </Link>
            </div>
            <div className="card__body card__body--actor">
                <Link to={`/actors/${id}`}>
                    <h5 className="card__title">{name}</h5>
                </Link>
            </div>
        </div>
    )
}