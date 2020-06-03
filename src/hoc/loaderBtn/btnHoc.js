import React from "react";
import './LoaderButton.css'

export default function ({handlerLoading, children}) {
    return (
        <div className="button-loading">
            <button className="button-loading__btn" onClick={handlerLoading}>{children}</button>
        </div>
    )
}