import React, {useState} from 'react'
import {makeImgUrl} from "helpers/make-img-url";
import './style.css'

import {ActorMovies} from "../actor-movies";
import {convertAge} from 'helpers/age-converter'

export const ActorDetails = React.memo(({ personInfo, moviesInfo })=> {
    const [classesMovie, setClassesMovie] = useState("moviesIsShow");
    const showMovies = () => {
        setClassesMovie(classesMovie ? "" : "moviesIsShow")
    }
    return (
        <>
            <div className="actor-info">
                <div className="actor-info__block actor-info__block--left">
                    <div className="actor-info__header">
                        <h1 className="actor-info__text actor-info__text--name">
                            {personInfo.name}
                        </h1>
                        <h3 className="actor-info__text actor-info__text--birth">
                            {personInfo.place_of_birth}
                        </h3>
                        <h3 className="actor-info__text actor-info__text--deathday">
                            {personInfo.deathday === null
                                ? convertAge(personInfo.birthday)
                                : <>from {personInfo.birthday && personInfo.birthday.slice(0, 4)}
                                &nbsp;to&nbsp;{personInfo.deathday.slice(0, 4)}</>
                            }
                        </h3>
                    </div>
                    <div className="actor-info__photo">
                        <img
                            src={makeImgUrl(personInfo.profile_path, {
                                placeholder: personInfo.gender === 2 ? "male" : "female"
                            })}
                            alt="person_image" />
                    </div>
                </div>
                <div className="actor-info__block actor-info__block--right">
                    <p className="actor-info__right--font">
                        {personInfo.biography}
                    </p>
                </div>
            </div>
                {moviesInfo.length ? <>
                    <div className="button-content">
                        <button
                            className="btn actor-movies"
                            onClick={showMovies}
                            type="button">
                            {classesMovie ? "Show movies" : "Hide movies"}
                        </button>
                    </div>
                    <div className={classesMovie}>
                        <ActorMovies cast={moviesInfo}/>
                    </div>
                </> : ""}
        </>
    )
})
