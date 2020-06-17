import React, { useEffect } from 'react'
import {Loader} from 'components'
import {ActorDetails} from './components/actor-details'
import {useSelector} from "react-redux";
import {useActions} from "hooks/use-actions";
import {actions} from "store/actor/actions";

export function ActorPage(props) {
    const {personInfo, moviesInfo, loading, hideMovies} = useSelector(({actor})=>{
        if(actor.moviesInfo === undefined) return {...actor, loading: true}
        return actor
    })
    const {fetchData, moviesInfoTrigger, clearData} = useActions({
        fetchData: actions.fetchData,
        moviesInfoTrigger: actions.moviesInfoTrigger,
        clearData: actions.clearData,
    })

    useEffect(() => {
        fetchData(props.match.params.actor);
        return clearData
    }, [props.match.params.actor]);
    return (<>
        {loading
            ? <Loader />
            : <ActorDetails
                personInfo={personInfo}
                handleClick={moviesInfoTrigger}
                isHidden={hideMovies}
                moviesInfo={moviesInfo}
            />
        }
    </>
    )
}
