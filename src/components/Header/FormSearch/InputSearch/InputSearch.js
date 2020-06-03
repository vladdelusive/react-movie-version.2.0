import Search from "../../../Search/Search";
import React, {useState} from "react";
import {FETCH_INTERVAL, SEARCH_URL, ACTOR_SEARCH} from "../../../config";
import API from "../../../../API";
import {setLocalStorage} from "../../../localStorage/localStorage";
import './InputSearch.css'

let timer;
export default function ({classes}) {
    const [inputValue, setInputValue] = useState("")
    const [showSearchedItems, setShowSearchedItems] = useState(false)

    const [page, setPage] = useState(1)
    const [resultsActors, setResultsActors] = useState(undefined)
    const [resultsMovies, setResultsMovies] = useState(undefined)
    const [allPages, setAllPages] = useState(0)

    const valueTarget = ({target}) => {
        setInputValue(target.value)
        clearTimeout(timer);
        if (target.value === "") {
            setResultsActors(undefined)
            setAllPages(0)
            setPage(1)
            return
        }
        //timer = setTimeout(doSearch.bind(null, target.value), FETCH_INTERVAL);
        return
    }

    const doSearch = async (value) => {

        const fetches = [
            API(SEARCH_URL(value)),
            API(ACTOR_SEARCH(value))
        ];

        const [ACTORS, MOVIES] = await Promise.all(fetches).then((res) =>
            Promise.all(res.map((r) => console.log(r.data)))
        );

        debugger
        const newStateActors = {
            results: [...ACTORS.results],
            allPages: ACTORS.total_pages,
            inputValue: value
        }

        const newStateMovies = {
            results: [...MOVIES.results],
            allPages: MOVIES.total_pages,
            inputValue: value
        }

        setResultsActors(newStateActors.results)
        setAllPages(newStateActors.allPages)
    }


    return (
        <div className="input-block__search">
            <input
                autoComplete="off"
                onBlur={() => {
                    // console.log("out")
                    // setShowSearchedItems(false)
                }}
                onFocus={() => {
                    console.log("in")
                    setShowSearchedItems(true)
                }}
                type="text"
                name="input"
                className={`${classes.inputClass} input-block__search-field`}
                value={inputValue}
                onChange={valueTarget}/>
            {showSearchedItems &&
            <Search searchResultActors={resultsActors} searchResultMovies={resultsMovies} amountPages={allPages}/>}
        </div>)
}
