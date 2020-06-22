import React, { useEffect } from 'react'
import {Loader} from 'components'
import {ActorDetails} from './components/actor-details'
import {useSelector} from "react-redux";
import {useActions} from "hooks/use-actions";
import {actions} from "store/actor/actions";

export const ActorPage = React.memo((props) => {
    const actorInfo = useSelector(({actorInfo})=>actorInfo)
    const {fetchData} = useActions(actions)
    useEffect(() => {
        if(!actorInfo[props.match.params.actor]){
            fetchData(props.match.params.actor);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.actor]);
    if(!actorInfo[props.match.params.actor]) return <Loader />
    return <ActorDetails
                personInfo={actorInfo[props.match.params.actor].personInfo}
                moviesInfo={actorInfo[props.match.params.actor].moviesInfo}
            />
})
