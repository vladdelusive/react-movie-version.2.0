import React from 'react'
import {IMAGE_URL, CARD_SIZE} from '../../config'
import './Actor.css'
import male from './unknown_male.png'
import female from './unknown_female.png'
import {Link} from 'react-router-dom'

export default function Actor({path, id, gender, name, searching}) {
    const image = path === null ? gender === 2 ? male : female : `${IMAGE_URL}${CARD_SIZE}${path}`
    return (
        <div className="actor" style={searching ? {width: 220} : {width: 350}}>
            <Link className="actor__photo" to={`/actors/${id}`}>
                <img style={searching ? {width: 220} : {width: 350}} src={image} alt="actor_image"/>
            </Link>
            <div className="actor-name">
                <Link className="actor-name__link" to={`/actors/${id}`}>
                    <h5 className="actor-name__link actor-name__link--text">{name}</h5>
                </Link>
            </div>
        </div>
    )
}
