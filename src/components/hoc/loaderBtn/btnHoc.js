import React from "react";
import './btnHoc.css'

export default function ({handlerLoading, children}) {
    return (
        <div className="btn btn-loading">
            <button onClick={handlerLoading}>{children}</button>
        </div>
    )
}