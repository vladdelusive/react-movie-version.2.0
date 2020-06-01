import React from 'react'
import Actor from './Actor/Actor'
import './Cast.css'
import ArrowTop from '../ArrowTop/ArrowTop'

export default React.memo(function Cast({ cast }) {
    debugger
    const identityId = []
    const actors = cast.map((actor) => {
        if(identityId.find((el)=>el===actor.id)){
            return ""
        }
        identityId.push(actor.id)
        return (<Actor name={actor.name}
            key={actor.id}
            id={actor.id}
            gender={actor.gender}
            path={actor.profile_path}
        />)
    })
    console.log(identityId)
    return (<>
            <div>
                {actors}
            </div>
            {actors.length > 12 ? <ArrowTop/> : ""}
        </>)
})
