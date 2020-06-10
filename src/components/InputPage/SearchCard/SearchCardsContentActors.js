import React from 'react'
import SearchCard from "./SearchCardActors/SearchCard";

import Card from "../../SearchCard/Card";

export default React.memo(function SearchCardsContentActors({cast}) {
    const identityId = []
    const actors = cast.map((actor) => {
        if (identityId.find((el) => el === actor.id)) {
            return ""
        }
        identityId.push(actor.id)
        return (<SearchCard name={actor.name}
                       key={actor.id}
                       id={actor.id}
                       gender={actor.gender}
                       path={actor.profile_path}
        />)
    })
    return <div className="section__content">
        <div className="section__content-container">
            {actors}
        </div>
    </div>
})