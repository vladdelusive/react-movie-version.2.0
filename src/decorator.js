import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import React from 'react'

import {
    ACSearchReloadPage,
    ACSearchClear,
    ACSearchBurger,
    ACSearchOffload,
    ACSearchToggle,
    ACSearchMoviePage,
    ACSearchActorPage,
    ACSearchInput,
    ACSearchUpload,
} from './store/SEARCH/actions/actionCreators'

 export function useActions(actions) {
    const dispatch = useDispatch();
    return bindActionCreators(actions, dispatch);
}

// export const decActions = decoratorAction([
//     ACSearchReloadPage,
//     ACSearchClear,
//     ACSearchBurger,
//     ACSearchOffload,
//     ACSearchToggle,
//     ACSearchMoviePage,
//     ACSearchActorPage,
//     ACSearchInput,
//     ACSearchUpload,
// ])
//
// console.log(decActions)