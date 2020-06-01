import React from 'react'

export default function LoaderButton({ handlerLoading, handlerGoUp, leftData, data = true }) {
    if(!data) return ""
    return (
            leftData()
            ? (<button
                onClick={handlerLoading}>Load more..</button>)
            : (<button
                onClick={handlerGoUp}>Thats all, go to up? </button>)
    )
}
