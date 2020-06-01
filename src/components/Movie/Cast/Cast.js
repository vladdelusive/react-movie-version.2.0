import React from 'react'
import Actor from './Actor/Actor'

export default function Cast({ cast }) {
    const actors = cast.map((actor, id) => {
        return (
            <Actor
                name={actor.name}
                key={actor.credit_id}
                id={actor.credit_id}
                gender={actor.gender}
                path={actor.profile_path}
            />)
    })
    return (
        <div className="card-deck row justify-content-center my-5">
            <h1>Credited cast:</h1>
            {actors}
        </div>
    )
}
