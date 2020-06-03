import React, {useState} from "react";
import "./FormSearch.css";
import Search from "../../Search/Search";

import InputSearch from "./InputSearch/InputSearch";

export default function FormSearch() {
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
    };

    const onClickCloseSearch = () => {
        setClasses({
            inputClass: "",
            btnClass: "",
            closeClass: "hide",
            sendClass: "hide"
        })
    };

    return (
        <form className="form" onSubmit={(e) => e.preventDefault()}>
            <button type="submit" className={`${classes.sendClass} form__btn`} onClick={() =>{}}/>
            <div className="input-block">
                <InputSearch classes={classes}/>
            </div>
            <button type="button" className={`${classes.btnClass} form__btn`} onClick={onClickOpenSearch}/>
            <a className={`${classes.closeClass} close`} onClick={onClickCloseSearch}/>
        </form>
    );
}
