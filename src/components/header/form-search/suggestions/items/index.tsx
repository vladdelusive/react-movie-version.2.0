import React from 'react'
import {Link} from "react-router-dom";

import ActorIcon from 'assets/images/ActorIcon.png'
import MovieIcon from 'assets/images/MovieIcon.png'
import { makeImgUrl} from "helpers/make-img-url";

import './style.css'
import {ISearchItem} from "./types";

export const SearchItem = React.memo<ISearchItem>(({image, title, typeItem, id, setShowSearchedItems}) => {
    const link = (typeItem === "movie" ? "/movies/" : "/actors/") + id
    const nullImage = typeItem === "movie" ? MovieIcon : ActorIcon
    return (
        <div className="input-item">
            <Link className="input-item__icon" to={link} onClick={()=>setShowSearchedItems(false)}>
                <img
                    src={image ? makeImgUrl(image) : nullImage}
                    alt="img"
                />
            </Link>

            <div className="input-item__text">
                <Link className="input-item__text--link" to={link}
                      onClick={()=>setShowSearchedItems(false)}>
                    {title}
                </Link>
            </div>
        </div>
    )
})