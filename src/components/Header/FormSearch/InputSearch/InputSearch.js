import Search from "../../../Search/Search";
import React, {createRef, useEffect, useState} from "react";
import {FETCH_INTERVAL, SEARCH_URL, ACTOR_SEARCH} from "../../../config";
import API from "../../../../API";
import {setLocalStorage} from "../../../localStorage/localStorage";
import './InputSearch.css'
import {HEADER_INPUT, HEADER_TOGGLE, SEARCH_OFFLOAD, SEARCH_UPLOAD} from "../../../../store/actions/actionTypes";
import {useDispatch, useSelector} from "react-redux";

const doc = document.getElementById("root")

let timer;
export default function ({classes}) {
    const dispatch = useDispatch();

    const {inputValue, resultsActors, showSearchedItems, resultsMovies} = useSelector(({header}) => header);

    useEffect(() => {
        const checkerEvents = (e) => {
            if(e.target.closest(".form")) return
            dispatch({type: HEADER_TOGGLE, payload: false})
        }
        doc.addEventListener("click", checkerEvents)
        return ()=>doc.removeEventListener("click", checkerEvents)
    })

    const valueTarget = ({target}) => {
        dispatch({type: HEADER_INPUT, payload: target.value})
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
                onFocus={() => dispatch({type: HEADER_TOGGLE, payload: true})}
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
