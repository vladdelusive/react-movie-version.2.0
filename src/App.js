import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom'

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

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/main" exact component={Main} />
        <Route path="/actors" exact component={Actors} />
        <Route path="/movies" exact component={MoviesPage} />
        <Route path="/movies/:movie" component={Movie} />
        <Route path="/actors/:actor" component={ActorPage} />
        <Route path="*" component={NotFoundPage}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
