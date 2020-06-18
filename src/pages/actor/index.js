import React, { useEffect } from 'react'
import {Loader} from 'components'
import {ActorDetails} from './components/actor-details'
import {useSelector} from "react-redux";
import {useActions} from "hooks/use-actions";
import {actions} from "store/actor/actions";

export const ActorPage = React.memo((props) => {
    const {actors, loading} = useSelector(({actorInfo})=>actorInfo)
    const {fetchData, changeLoading} = useActions(actions)
    useEffect(() => {
        if(!actors[props.match.params.actor]){
            fetchData(props.match.params.actor);
        } else {
            changeLoading(false)
        }
        return () => {changeLoading(true)}
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [props.match.params.actor]);
    return (<>
        {loading
            ? <Loader />
            : <ActorDetails
                personInfo={actors[props.match.params.actor].personInfo}
                moviesInfo={actors[props.match.params.actor].moviesInfo}
            />
        }
    </>
    )
})
