import Search from "../../../Search/Search";
import React, {createRef, useEffect, useState} from "react";
import {FETCH_INTERVAL, SEARCH_URL, ACTOR_SEARCH} from "../../../config";
import API from "../../../../API";
import {setLocalStorage} from "../../../localStorage/localStorage";
import './InputSearch.css'

const doc = document.getElementById("root")

let timer;
export default function ({classes, btnRefClose, btnRefSearch}) {
    const [inputValue, setInputValue] = useState("")
    const [showSearchedItems, setShowSearchedItems] = useState(false)

    const [resultsActors, setResultsActors] = useState(null)
    const [resultsMovies, setResultsMovies] = useState(null)
    const [allPagesActors, setAllPagesActors] = useState(0)
    const [allPagesMovies, setAllPagesMovies] = useState(0)


    useEffect(()=> {
        const func = (e) => {
            if(e.target == btnRefClose.current || e.target == btnRefSearch.current) setShowSearchedItems(false)
            if(e.target.closest(".form")) return
            setShowSearchedItems(false)
        }
        doc.addEventListener("click", func)
        return ()=>doc.removeEventListener("click", func)
    })

    const valueTarget = ({target}) => {
        setInputValue(target.value)
        clearTimeout(timer);
        if (target.value === "") {
            setResultsActors(null)
            setResultsMovies(null)
            setAllPagesActors(0)
            setAllPagesMovies(0)

            return
        }
        timer = setTimeout(doSearch.bind(null, target.value), FETCH_INTERVAL);
        return
    }

    const doSearch = async (value) => {

        const fetches = [
            API(SEARCH_URL(value)),
            API(ACTOR_SEARCH(value))
        ];

        const [MOVIES, ACTORS] = await Promise.all(fetches).then((res) =>
            Promise.all(res.map((r) => r.data))
        );
        console.log(ACTORS)
        console.log(MOVIES)
        setResultsActors(ACTORS.results)
        setResultsMovies(MOVIES.results)

        setAllPagesActors(ACTORS.total_pages)
        setAllPagesMovies(MOVIES.total_pages)
    }


    return (
        <div className="input-block__search">
            <input
                autoComplete="off"
                onFocus={() => {setShowSearchedItems(true)}}
                type="text"
                name="input"
                className={`${classes.inputClass} input-block__search-field`}
                value={inputValue}
                onChange={valueTarget}/>
            {showSearchedItems && (resultsActors !== null || resultsMovies !== null) &&
            <Search
                searchResultActors={resultsActors}
                searchResultMovies={resultsMovies}
                amountPagesMovies={allPagesMovies}
                amountPagesActors={allPagesActors}
            />}
        </div>)
}
