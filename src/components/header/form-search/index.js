import React, { useState, useEffect } from "react";
import "./style.css";
import { FETCH_TIMEOUT } from 'constants/constants'

import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Search} from "./suggestions";

import {actions} from 'store/search/actions'
import {useActions} from "hooks/use-actions";

let fetchTimer;

export function FormSearch() {
    const {inputValue, resultsActors, showSearchedItems, resultsMovies} = useSelector(({search}) => search);
    const {ACInputIsActive, ACReloadPage,ACToggleSuggestions, ACSetInput, ACOffloadData, ACFetchInputValue } = useActions({
        ACInputIsActive: actions.ACInputIsActive,
        ACToggleSuggestions: actions.ACToggleSuggestions,
        ACReloadPage: actions.ACReloadPage,
        ACSetInput: actions.ACSetInput,
        ACOffloadData: actions.ACOffloadData,
        ACFetchInputValue: actions.ACFetchInputValue
    })

    const [classes, setClasses] = useState({ inputClass: "", btnClass: "",
        closeClass: "hide", sendClass: "hide"});

    const onClickOpenSearch = () => {
        setClasses({inputClass: "show", btnClass: "hide",closeClass: "", sendClass: ""})
        ACInputIsActive(true)
    };
    const onClickCloseSearch = () => {
        setClasses({inputClass: "", btnClass: "", closeClass: "hide", sendClass: "hide"})
        ACToggleSuggestions(false); ACInputIsActive(false)
    };

    const valueTarget = ({target}) => {
        ACSetInput(target.value)
        clearTimeout(fetchTimer);
        if (target.value === "") {
            ACOffloadData()
            return
        }
        fetchTimer = setTimeout(() => ACFetchInputValue(target.value), FETCH_TIMEOUT);
    }

    useEffect(() => {
        const checkerEvents = (e) => {
            if(e.target.closest(".form")) return
            ACToggleSuggestions(false)
        }
        document.getElementById("root").addEventListener("click", checkerEvents)
        return ()=>document.getElementById("root").removeEventListener("click", checkerEvents)
    })

    return (
        <form className="form" onSubmit={(e) => {e.preventDefault()}}>
            <div className="form__submit">
                <Link to={`/search?query=${inputValue}`}>
                    <button
                        onClick={()=>{
                            ACToggleSuggestions(false)
                            ACReloadPage()
                        }}
                        type="submit"
                        className={`${classes.sendClass} form__btn`}
                    />
                </Link> 
            </div>
            <div className="input-block">
                <div className="input-block__search">
                    <input
                        autoComplete="off"
                        onFocus={() => ACToggleSuggestions(true)}
                        type="text"
                        name="input"
                        className={`${classes.inputClass} input-block__search-field`}
                        value={inputValue}
                        onChange={valueTarget}/>
                            {showSearchedItems &&
                                (resultsActors !== null || resultsMovies !== null) &&
                                    <Search
                                        searchResultActors={resultsActors}
                                        searchResultMovies={resultsMovies}
                                        value={inputValue.replace(/\s+/g,' ').trim()}
                                    />
                            }
                </div>
            </div>
            <div className="form__open">
                <button type="button" className={`${classes.btnClass} form__btn`} onClick={onClickOpenSearch}/>
            </div>
            <div className={`form__control ${classes.closeClass} close`} onClick={onClickCloseSearch}/>
        </form>
    );
}
