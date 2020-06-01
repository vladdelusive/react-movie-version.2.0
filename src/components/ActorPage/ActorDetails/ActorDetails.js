import React from 'react'
import { IMAGE_URL, CARD_SIZE, } from '../../config'
import './ActorDetails.css'
import convertAge from './ageConverter'
import ActorMovies from './ActorMovies/ActorMovies'

export default function ActorDetails({ personInfo, handleClick, isHidden, moviesInfo }) {
    return (
        <>
            <div className="container-person">
                <div className="container-person-left">
                    <div className="container-person-left-info">
                        <h1 className="person-name">{personInfo.name}</h1>
                        <h3 className="person-birth">{personInfo.place_of_birth}</h3>
                        <h3 className="person-age">
                            {personInfo.deathday === null
                                ? convertAge(personInfo.birthday)
                                : <>from {personInfo.birthday.slice(0, 4)} to {personInfo.deathday.slice(0, 4)}</>
                            }
                        </h3>
                    </div>
                    <img src={`${IMAGE_URL}${CARD_SIZE}${personInfo.profile_path}`} className="person-image" alt="person_image" />
                </div>
                <div className="container-person-right">
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {personInfo.biography}</p>
                </div>
            </div>
            <button
                onClick={handleClick}
                type="button"
                className="btn btn-outline-info btn-lg show-movie mx-auto">
                {isHidden ? "Show movies" : "Hide movies"}
            </button>
            {
                isHidden ? "" : <ActorMovies cast={moviesInfo} />
            }
        </>
    )
}
