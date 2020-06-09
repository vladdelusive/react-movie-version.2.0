import React, { useState} from "react";
import "./FormSearch.css";

import InputSearch from "./InputSearch/InputSearch";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {SEARCH_TOGGLE, SEARCH_RELOAD_PAGE, SEARCH_INPUT_IS_ACTIVE} from "../../../store/SEARCH/actions/actionTypes";

import { ACSearchIsActive, ACSearchToggle, ACSearchReloadPage } from '../../../store/SEARCH/actions/actionCreators'

export default function FormSearch() {
    const {inputValue, showSearchedItems} = useSelector(({search}) => search);
    const dispatch = useDispatch()

    const [classes, setClasses] = useState({
        inputClass: "",
        btnClass: "",
        closeClass: "hide",
        sendClass: "hide"
    });

    const onClickOpenSearch = () => {
        setClasses({
            inputClass: "show",
            btnClass: "hide",
            closeClass: "",
            sendClass: ""
        })
        dispatch(ACSearchIsActive(true))
    };

    const onClickCloseSearch = () => {
        setClasses({
            inputClass: "",
            btnClass: "",
            closeClass: "hide",
            sendClass: "hide"
        })
        dispatch(ACSearchToggle(false))
        dispatch(ACSearchIsActive(false))
    };

    return (
        <form className="form" onSubmit={(e) => {e.preventDefault()}}>
            <div className="form__submit">
            <Link to={`/search?query=${inputValue}`}>
                <button
                    onClick={()=>{
                        dispatch(ACSearchToggle(false))
                        dispatch(ACSearchReloadPage)
                    }}
                    type="submit"
                    className={`${classes.sendClass} form__btn`}
                />
            </Link>
            </div>
            <div className="input-block">
                <InputSearch
                    classes={classes}
                />
            </div>
            <div className="form__open">
                <button type="button" className={`${classes.btnClass} form__btn`} onClick={onClickOpenSearch}/>
            </div>
            
            <div className={`form__control ${classes.closeClass} close`} onClick={onClickCloseSearch}/>
        </form>
    );
}
