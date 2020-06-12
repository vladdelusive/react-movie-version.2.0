import React from 'react'
import {Link} from 'react-router-dom'

import { IMAGE_URL } from 'api/config'
import { CARD_SIZE } from 'constants/constants'
import male from 'assets/images/unknown_male.png'
import female from 'assets/images/unknown_female.png'

export const SearchCard = ({path, id, gender, name}) => {
    const image = path === null ? gender === 2 ? male : female : `${IMAGE_URL}${CARD_SIZE}${path}`
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