import React from 'react'
import { IMAGE_URL, CARD_SIZE, } from '../../config'
import './ActorDetails.css'
import convertAge from './ageConverter'
import ActorMovies from './ActorMovies/ActorMovies'

export default function ActorDetails({ personInfo, handleClick, isHidden, moviesInfo }) {
    return (
        <>
            <div>
                <div>
                    <div>
                        <h1>{personInfo.name}</h1>
                        <h3>{personInfo.place_of_birth}</h3>
                        <h3>
                            {personInfo.deathday === null
                                ? convertAge(personInfo.birthday)
                                : <>from {personInfo.birthday.slice(0, 4)} to {personInfo.deathday.slice(0, 4)}</>
                            }
                        </h3>
                    </div>
                    <img src={`${IMAGE_URL}${CARD_SIZE}${personInfo.profile_path}`} alt="person_image" />
                </div>
                <div>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {personInfo.biography}</p>
                </div>
            </div>
            <button
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
