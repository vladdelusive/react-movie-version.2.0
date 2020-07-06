import React, {FC, useEffect} from 'react'
import {Loader} from 'components'
import {ActorDetails} from './components/actor-details'
import {useSelector} from "react-redux";
import {useActions} from "hooks/use-actions";
import {actions} from "store/actors/actions";
import {IStore} from "react-app-env"
import {IActorsState} from "store/actors/types";
import {IPropsActorPage} from "./types";

export const ActorPage: FC<IPropsActorPage> = React.memo<IPropsActorPage>((props) => {
    const {actorsInfo} = useSelector<IStore, IActorsState>(({actors})=>actors)
    const {getActorInfo} = useActions(actions)
    useEffect(() => {
        if(!actorsInfo[props.match.params.actor]){
            getActorInfo(props.match.params.actor);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.actor]);
    if(!actorsInfo[props.match.params.actor]) return <Loader />
    return <ActorDetails
                personInfo={actorsInfo[props.match.params.actor].personInfo}
                moviesInfo={actorsInfo[props.match.params.actor].moviesInfo}
            />
})
