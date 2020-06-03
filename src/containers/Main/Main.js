import React from "react";
import './Main.css'

export default function Main({children}) {
    return (
        <div className="main">
            {children}
        </div>
    )
}