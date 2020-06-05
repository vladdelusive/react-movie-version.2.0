import Search from "../../../Search/Search";
import React, { useEffect} from "react";
import {FETCH_INTERVAL, SEARCH_URL, ACTOR_SEARCH} from "../../../config";
import API from "../../../../API";
import './InputSearch.css'
import {SEARCH_INPUT,SEARCH_TOGGLE, SEARCH_OFFLOAD, SEARCH_UPLOAD} from "../../../../store/SEARCH/actions/actionTypes";
import {useDispatch, useSelector} from "react-redux";

const doc = document.getElementById("root")

let timer;
export default function ({classes}) {
    const dispatch = useDispatch();

    const {inputValue, resultsActors, showSearchedItems, resultsMovies} = useSelector(({search}) => search);

    useEffect(() => {
        const checkerEvents = (e) => {
            if(e.target.closest(".form")) return
            dispatch({type: SEARCH_TOGGLE, payload: false})
        }
        doc.addEventListener("click", checkerEvents)
        return ()=>doc.removeEventListener("click", checkerEvents)
    })

    const valueTarget = ({target}) => {
        dispatch({type: SEARCH_INPUT, payload: target.value})
        clearTimeout(timer);
        if (target.value === "") {
            dispatch({type: SEARCH_OFFLOAD})
            return
        }
        timer = setTimeout(doSearch.bind(null, target.value), FETCH_INTERVAL);
    }

    const doSearch = async (value) => {
        const fetches = [
            API(SEARCH_URL(value, 1)),
            API(ACTOR_SEARCH(value))
        ];
        const [MOVIES, ACTORS] = await Promise.all(fetches).then((res) =>
            Promise.all(res.map((r) => r.data))
        );
        dispatch({type: SEARCH_UPLOAD, actors: ACTORS.results, movies: MOVIES.results})
    }
    return (
        <div className="input-block__search">
            <input
                autoComplete="off"
                onFocus={() => dispatch({type: SEARCH_TOGGLE, payload: true})}
                type="text"
                name="input"
                className={`${classes.inputClass} input-block__search-field`}
                value={inputValue}
                onChange={valueTarget}/>
            {showSearchedItems && (resultsActors !== null || resultsMovies !== null) &&
            <Search
                searchResultActors={resultsActors}
                searchResultMovies={resultsMovies}
                value={inputValue.replace(/\s+/g,' ').trim()}
            />}
        </div>)
}
