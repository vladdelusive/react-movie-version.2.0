import React from 'react'
import './SearchItem.css'
import ActorIcon from './ActorIcon.png'

import MovieIcon from './MovieIcon.png'

export default function SearchItem() {
    return (
        <div className="input-item">
                <img src={MovieIcon} className="input-item__icon"/>
                <div className="input-item__text">Item Movie</div>
        </div>
    )
}