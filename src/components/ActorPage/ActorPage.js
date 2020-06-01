import React, { useState, useEffect } from 'react'
import { ACTOR_DETAILS, ACTOR_MOVIES } from '../config'
import { getLocalStorage, setLocalStorage } from '../localStorage/localStorage'
import Loader from '../Loader/Loader'
import ActorDetails from './ActorDetails/ActorDetails'

import API from '../../API'

export default function ActorPage(props) {
    const [personInfo, setPersonInfo] = useState({})
    const [loading, setLoading] = useState(true)

    const [moviesInfo, setMoviesInfo] = useState([])
    const [hidden, setHidden] = useState(true)

    const handleClick = () => {
        const personId = props.match.params.actor;
        setLocalStorage(`hidden-${personId}`, !hidden)
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

      setLocalStorage(`person-${personId}`, {
        personData: AC_DET,
        personMovies: AC_MOV.cast,
      });

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
