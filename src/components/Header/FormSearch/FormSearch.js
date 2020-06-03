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

    const formRef = React.createRef()

    const onClickOpenSearch = () => {
        setClasses({
            inputClass: "input__search--clicked show",
            btnClass: "input__btn--clicked hide",
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
        <form ref={formRef} className="input" onSubmit={(e) => e.preventDefault()}>
            <button type="button" className={`${classes.sendClass} input__btn`} onClick={() =>{}}/>
            <div className="input__block">
                <InputSearch classes={classes}/>
            </div>
            <button type="button" className={`${classes.btnClass} input__btn`} onClick={onClickOpenSearch}/>
            <a className={`${classes.closeClass} close`} onClick={onClickCloseSearch}/>
        </form>
    );
}
