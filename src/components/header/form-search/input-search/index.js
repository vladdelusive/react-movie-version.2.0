import React, { useEffect} from "react";
import { useSelector} from "react-redux";

import API from "http/index";
import { SEARCH_MOVIE_PARAM_URL, SEARCH_ACTOR_PARAM_URL} from "api/config";

import { FETCH_TIMEOUT } from 'constants/constants'

import {Search} from "components/header/form-search/input-search/suggetions";
import 'components/header/form-search/input-search/style.css'

import {
    ACSearchToggle,
    ACSearchUpload,
    ACSearchInput,
    ACSearchOffload
} from 'store/search/actions'
import {useActions} from "hooks/use-actions";

const doc = document.getElementById("root")

let timer;
export const InputSearch = ({classes}) => {
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
            API(SEARCH_MOVIE_PARAM_URL(value, 1)),
            API(SEARCH_ACTOR_PARAM_URL(value))
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
