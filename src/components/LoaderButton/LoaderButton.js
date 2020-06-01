import React from 'react'

export default function LoaderButton({ handlerLoading, handlerGoUp, leftData, data = true }) {
    if(!data) return ""
    return (
            leftData()
            ? (<button
                className="btn btn-info mx-auto center"
                onClick={handlerLoading}>Load more..</button>)
            : (<button
                className="btn btn-danger mx-auto center"
                onClick={handlerGoUp}>Thats all, go to up? </button>)
    )
}
