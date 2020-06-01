import React from 'react'
import './Loader.css'

export default function Loader() {
    return <div className="d-flex justify-content-center">
        <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
}
