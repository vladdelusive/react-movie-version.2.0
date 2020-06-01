import React from 'react'
import Actor from './Actor/Actor'
import './Cast.css'
import ArrowTop from '../ArrowTop/ArrowTop'

export default React.memo(function Cast({ cast }) {
    const identityId = []
    const actors = cast.map((actor) => {
        if(identityId.find((el)=>el===actor.id)){
            return ""
        }
        return (<Actor name={actor.name}
            key={actor.id}
            id={actor.id}
            gender={actor.gender}
            path={actor.profile_path}
        />)
    })
    return (<>
            <div>
                {actors}
            </div>
            {actors.length > 12 ? <ArrowTop/> : ""}
        </>)
})
