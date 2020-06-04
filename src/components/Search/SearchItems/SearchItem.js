import React from 'react'
import './SearchItem.css'
import ActorIcon from './ActorIcon.png'

import MovieIcon from './MovieIcon.png'
import {IMAGE_URL, CARD_SIZE} from "../../config";
import {Link} from "react-router-dom";

export default function SearchItem({image, title, typeItem, id}) {
    const link = (typeItem === "movie" ? "/movies/" : "/actors/") + id
    return (
        <div className="input-item">
            <Link to={link}>
                <img src={`${IMAGE_URL}${CARD_SIZE}${image}`}
                     className="input-item__icon"/>
                <div className="input-item__text">{title}</div>
            </Link>
        </div>
    )
}