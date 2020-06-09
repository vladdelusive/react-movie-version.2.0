import Search from "../../../Search/Search";
import React, { useEffect} from "react";
import {FETCH_TIMEOUT, SEARCH_URL, ACTOR_SEARCH} from "../../../config";
import API from "../../../../API";
import './InputSearch.css'
import {useDispatch, useSelector} from "react-redux";

import { ACSearchToggle, ACSearchUpload, ACSearchInput, ACSearchOffload} from '../../../../store/SEARCH/actions/actionCreators'

const doc = document.getElementById("root")

let timer;
export default function ({classes}) {
    const dispatch = useDispatch();

    const {inputValue, resultsActors, showSearchedItems, resultsMovies} = useSelector(({search}) => search);

    useEffect(() => {
        const checkerEvents = (e) => {
            if(e.target.closest(".form")) return
            dispatch(ACSearchToggle(false))
        }
        doc.addEventListener("click", checkerEvents)
        return ()=>doc.removeEventListener("click", checkerEvents)
    })

    const valueTarget = ({target}) => {
        dispatch(ACSearchInput(target.value))
        clearTimeout(timer);
        if (target.value === "") {
            dispatch(ACSearchOffload())
            return
        }
        timer = setTimeout(doSearch.bind(null, target.value), FETCH_TIMEOUT);
    }

    const doSearch = async (value) => {
        const fetches = [
            API(SEARCH_URL(value, 1)),
            API(ACTOR_SEARCH(value))
        ];
        const [MOVIES, ACTORS] = await Promise.all(fetches).then((res) =>
            Promise.all(res.map((r) => r.data))
        );
        dispatch(ACSearchUpload(ACTORS.results, MOVIES.results))
    }
    return (
        <div className="input-block__search">
            <input
                autoComplete="off"
                onFocus={() => dispatch(ACSearchToggle(true))}
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
