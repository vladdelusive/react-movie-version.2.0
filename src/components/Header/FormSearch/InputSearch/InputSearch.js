import Search from "../../../Search/Search";
import React, {useState} from "react";
import {FETCH_INTERVAL, SEARCH, SEARCH_URL} from "../../../config";
import API from "../../../../API";
import {setLocalStorage} from "../../../localStorage/localStorage";

let timer;
export default function ({classes}) {
    const [inputValue, setInputValue] = useState("")
    const [showSearchedItems, setShowSearchedItems] = useState(false)

    const [page, setPage] = useState(1)
    const [results, setResults] = useState(undefined)
    const [allPages, setAllPages] = useState(0)

    const valueTarget = ({ target }) => {
        setInputValue(target.value)
        clearTimeout(timer);
        if (target.value === "") {
            setResults(undefined)
            setAllPages(0)
            setPage(1)
            return
        }
        timer = setTimeout(doSearch.bind(null, target.value), FETCH_INTERVAL);
        return
    }

    const doSearch = async (value) => {
            const fetched = await API(SEARCH_URL(value));
            const {data} = fetched
            const newState = {
                results: [...data.results],
                allPages: data.total_pages,
                inputValue: value
            }
            setResults(newState.results)
            setAllPages(newState.allPages)
    }

    console.log(results)

    return <div className="input__block">
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
            className={`${classes.inputClass} input__search`}
            value={inputValue}
            onChange={valueTarget}/>
        {showSearchedItems && <Search searchResult={results} amountPages={allPages}/>}
    </div>
}
