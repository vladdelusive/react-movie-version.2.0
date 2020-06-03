import React from 'react'
import './SearchItem.css'
import ActorIcon from './ActorIcon.png'

import MovieIcon from './MovieIcon.png'

export default function SearchItem() {
    return (
        <div className="input__search--below-item">
                <img src={MovieIcon} className="search-icon__type"/>
                <div className="search-icon__text">Item Movie</div>
        </div>
    )
}