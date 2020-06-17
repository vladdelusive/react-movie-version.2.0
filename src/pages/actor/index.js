import React, { useEffect } from 'react'
import {Loader} from 'components'
import {ActorDetails} from './components/actor-details'
import {useSelector} from "react-redux";
import {useActions} from "hooks/use-actions";
import {actions} from "store/actor/actions";

export const ActorPage = React.memo((props) => {
    const {actors, loading} = useSelector(({actor})=>actor)
    const {fetchData, changeLoadingTo} = useActions({
        fetchData: actions.fetchData,
        changeLoadingTo: actions.changeLoading,
    })
    useEffect(() => {
        if(!actors[props.match.params.actor]){
            fetchData(props.match.params.actor);
        } else {
            changeLoadingTo(false)
        }
        return () => {changeLoadingTo(true)}
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
