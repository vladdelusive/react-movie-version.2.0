import React from 'react'
import { IMAGE_URL, CARD_SIZE, } from '../../config'
import './ActorDetails.css'
import convertAge from './ageConverter'
import ActorMovies from './ActorMovies/ActorMovies'

export default function ActorDetails({ personInfo, handleClick, isHidden, moviesInfo }) {
    return (
        <>
            <div className="actor-info">
                <div className="actor-info__left">
                    <div>
                        <h1 className="actor--info__text">{personInfo.name}</h1>
                        <h3 className="actor--info__text">{personInfo.place_of_birth}</h3>
                        <h3 className="actor--info__text">
                            {personInfo.deathday === null
                                ? convertAge(personInfo.birthday)
                                : <>from {personInfo.birthday.slice(0, 4)} to {personInfo.deathday.slice(0, 4)}</>
                            }
                        </h3>
                    </div>
                    <img
                        className="actor-info__left--width"
                        src={`${IMAGE_URL}${CARD_SIZE}${personInfo.profile_path}`}
                        alt="person_image" />
                </div>
                <div className="actor-info__right">
                    <p className="actor-info__right--font">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {personInfo.biography}</p>
                </div>
            </div>
            <button
                className="actor-movies"
                onClick={handleClick}
                type="button">
                {isHidden ? "Show movies" : "Hide movies"}
            </button>
            {
                isHidden ? "" : <ActorMovies cast={moviesInfo} />
            }
        </>
    )
}
