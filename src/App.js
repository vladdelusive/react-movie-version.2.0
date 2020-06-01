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

function App() {
  return (
    <>
      <Header/>
      <Switch>
        <Route path="/main" exact component={Main} />
        <Route path="/popular" component={Popular} />
        <Route path="/top" component={TopRated} />
        <Route path="/actors" exact component={Actors} />
        <Route path="/movies/:movie" component={Movie} />
        <Route path="/actors/:actor" component={ActorPage} />
        <Redirect to={'/main'}/>
      </Switch>
      <Footer/>
    </>
  );
}

export default App;
