import React, { useState, useEffect } from 'react'
import { ACTOR_DETAILS, ACTOR_MOVIES } from 'services/api/config'
import { getLocalStorage } from 'helpers/local-storage'
import {Loader} from 'components'
import {ActorDetails} from './components/actor-details'

import API from 'services/http/index'

export function ActorPage(props) {
    const [personInfo, setPersonInfo] = useState({})
    const [loading, setLoading] = useState(true)

    const [moviesInfo, setMoviesInfo] = useState([])
    const [hidden, setHidden] = useState(true)

    const handleClick = () => {
        const personId = props.match.params.actor;
        localStorage.setItem(`hidden-${personId}`, JSON.stringify(!hidden))
        setHidden(!hidden)
    }

    useEffect(() => {
        async function setFetchData() {
            const fetches = [
                API(ACTOR_DETAILS(personId)),
                API(ACTOR_MOVIES(personId)),
            ];
            const [AC_DET, AC_MOV] = await Promise.all(fetches).then((res) =>
              Promise.all(res.map((r) => r.data))
            );

            localStorage.setItem(`person-${personId}`, JSON.stringify({
              personData: AC_DET,
              personMovies: AC_MOV.cast,
            }));

            setMoviesInfo(AC_MOV.cast);
            setPersonInfo(AC_DET);
            setLoading(false);
        }

        const personId = props.match.params.actor;
        const actorLocalState = getLocalStorage(`person-${personId}`);

        if (actorLocalState) {
            setPersonInfo(actorLocalState.personData);
            setMoviesInfo(actorLocalState.personMovies);
            setLoading(false);
        } else {
            setFetchData();
        }
        const localStateBtn = getLocalStorage(`hidden-${personId}`);
        if (localStateBtn === false || localStateBtn === true) {
            setHidden(localStateBtn);
        }
    }, [props.match.params.actor]);

    return (<>
        {loading
            ? <Loader />
            : <ActorDetails
                personInfo={personInfo}
                handleClick={handleClick}
                isHidden={hidden}
                moviesInfo={moviesInfo}
            />
        }
    </>
    )
}
