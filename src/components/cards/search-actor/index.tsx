import React from 'react'
import {Link} from 'react-router-dom'

import { makeImgUrl } from 'helpers/make-img-url'

export const SearchCard = ({path, id, gender, name}) => {
    const image = makeImgUrl(path, {placeholder: gender === 2 ? "male" : "female"})
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