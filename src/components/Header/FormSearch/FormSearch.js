import React, { useState} from "react";
import "./FormSearch.css";

import InputSearch from "./InputSearch/InputSearch";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

import {
    ACSearchIsActive,
    ACSearchToggle,
    ACSearchReloadPage,
} from '../../../store/SEARCH/actions/actionCreators'
import {useActions} from "../../../decorator";

export default function FormSearch() {
    const {inputValue} = useSelector(({search}) => search);

    const {
        ACSearchIsActive: bindIsActive,
        ACSearchToggle: bindToggle,
        ACSearchReloadPage : bindReloadPage
    } = useActions({ACSearchIsActive, ACSearchToggle, ACSearchReloadPage})

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
        bindIsActive(true)
    };

    const onClickCloseSearch = () => {
        setClasses({
            inputClass: "",
            btnClass: "",
            closeClass: "hide",
            sendClass: "hide"
        })
        bindToggle(false)
        bindIsActive(false)
    };

    return (
        <form className="form" onSubmit={(e) => {e.preventDefault()}}>
            <div className="form__submit">
            <Link to={`/search?query=${inputValue}`}>
                <button
                    onClick={()=>{
                        bindToggle(false)
                        bindReloadPage()
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
