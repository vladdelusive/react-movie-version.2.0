import React from "react";
import './Main.css'

export default function Main({children}) {
    return (
        <main className="section">
            {children}
        </main>
    )
}