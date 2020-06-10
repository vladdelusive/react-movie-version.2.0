import Search from "../../../Search/Search";
import React, { useEffect} from "react";
import {FETCH_TIMEOUT, SEARCH_URL, ACTOR_SEARCH} from "../../../../config";
import API from "../../../../API/API";
import './InputSearch.css'
import { useSelector} from "react-redux";

import {
    ACSearchToggle,
    ACSearchUpload,
    ACSearchInput,
    ACSearchOffload
} from '../../../../store/SEARCH/actions/actionCreators'
import {useActions} from "../../../../store/useActions/decorator";

const doc = document.getElementById("root")

let timer;
export default function ({classes}) {
    const {inputValue, resultsActors, showSearchedItems, resultsMovies} = useSelector(({search}) => search);
    const {
        ACSearchInput: bindInput,
        ACSearchToggle: bindToggle,
        ACSearchOffload : bindOffload,
        ACSearchUpload: bindUpload
    } = useActions({ACSearchInput, ACSearchToggle, ACSearchOffload, ACSearchUpload})

    useEffect(() => {
        const checkerEvents = (e) => {
            if(e.target.closest(".form")) return
            bindToggle(false)
        }
        doc.addEventListener("click", checkerEvents)
        return ()=>doc.removeEventListener("click", checkerEvents)
    })

    const valueTarget = ({target}) => {
        bindInput(target.value)
        clearTimeout(timer);
        if (target.value === "") {
            bindOffload()
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
        bindUpload({actors: ACTORS.results, movies: MOVIES.results})
    }
    return (
        <div className="input-block__search">
            <input
                autoComplete="off"
                onFocus={() => bindToggle(true)}
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
