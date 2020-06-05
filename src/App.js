import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Header from './components/Header/Header'
import Popular from './components/Popular/Popular'
import TopRated from './components/TopRated/TopRated'
import Movie from './components/Movie/Movie'
import ActorPage from './components/ActorPage/ActorPage'
import Actors from './components/Actors/Actors'
import Main from './components/Main/Main'
import {Footer} from "./components/Footer/Footer";
import NotFoundPage from "./components/WrongPath/WrongPath";
import MoviesPage from "./components/MoviesPage/MoviesPage";

import MainContainer from "./containers/Main/Main";

import InputPage from "./components/InputPage/InputPage";

import Input from "./components/Input/Input";


export const ContextPage = React.createContext(1);



function App() {
    return (
        <ContextPage.Provider value={1}>
            <Header/>
            <MainContainer>
                <Switch>
                    <Route path="/" exact component={Main}/>
                    <Route path="/actors" exact component={Actors}/>
                    <Route path="/movies" exact component={MoviesPage}/>
                    <Route path="/search" component={InputPage}/>
                    <Route path="/movies/:movie" component={Movie}/>
                    <Route path="/actors/:actor" component={ActorPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </MainContainer>
            <Footer/>
        </ContextPage.Provider>
    );
}

export default App;
