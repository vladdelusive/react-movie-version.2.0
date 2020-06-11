import React from 'react'
import { IMAGE_URL } from 'api/config'

import { CARD_SIZE } from 'constants/constants'

import 'components/actor-page/actor-details/style.css'

import {convertAge} from 'helpers/age-converter'
import ActorMovies from "components/actor-page/actor-movies/style";

export function ActorDetails({ personInfo, handleClick, isHidden, moviesInfo }) {
    return (
        <>
            <div className="actor-info">
                <div className="actor-info__block actor-info__block--left">
                    <div className="actor-info__header">
                        <h1 className="actor-info__text actor-info__text--name">{personInfo.name}</h1>
                        <h3 className="actor-info__text actor-info__text--birth">{personInfo.place_of_birth}</h3>
                        <h3 className="actor-info__text actor-info__text--deathday">
                            {personInfo.deathday === null
                                ? convertAge(personInfo.birthday)
                                : <>from {personInfo.birthday && personInfo.birthday.slice(0, 4)} to {personInfo.deathday.slice(0, 4)}</>
                            }
                        </h3>
                    </div>
                    <div className="actor-info__photo">
                        <img
                            src={`${IMAGE_URL}${CARD_SIZE}${personInfo.profile_path}`}
                            alt="person_image" />
                    </div>
                </div>
                <div className="actor-info__block actor-info__block--right">
                    <p className="actor-info__right--font">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {personInfo.biography}</p>
                </div>
            </div>
            <div className="button-content">
                <button
                    className="btn actor-movies"
                    onClick={handleClick}
                    type="button">
                    {isHidden ? "Show movies" : "Hide movies"}
                </button>
            </div>
            {
                isHidden ? "" : <ActorMovies cast={moviesInfo} />
            }
        </>
    )
}
