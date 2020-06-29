import React, {FC, useEffect} from 'react'
import {Loader} from 'components'
import {ActorDetails} from './components/actor-details'
import {useSelector} from "react-redux";
import {useActions} from "hooks/use-actions";
import {actions} from "store/actors/actions";
import {IStore} from "../../react-app-env"
import * as H from "history";

interface MatchParams {
    actor: number;
}

interface Props extends RouteComponentProps<MatchParams> {}

export interface RouteComponentProps<P> {
    match: match<P>;
    location: H.Location;
    history: H.History;
    staticContext?: any;
}

export interface match<P> {
    params: P;
    isExact: boolean;
    path: string;
    url: string;
}

export const ActorPage: FC<Props> = React.memo((props) => {
    const {actorsInfo} = useSelector(({actors}: IStore)=>actors)
    const {fetchData} = useActions(actions)
    useEffect(() => {
        if(!actorsInfo[props.match.params.actor]){
            fetchData(props.match.params.actor);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.actor]);
    if(!actorsInfo[props.match.params.actor]) return <Loader />
    return <ActorDetails
                personInfo={actorsInfo[props.match.params.actor].personInfo}
                moviesInfo={actorsInfo[props.match.params.actor].moviesInfo}
            />
})