import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import React from 'react'

 export function useActions(actions) {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
}