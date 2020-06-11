import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import Header from "components/Header/Header";
import BurgerMenu from "components/BurgerMenu/BurgerMenu";
import { DeveloperLink } from "components/DeveloperLink/Footer";
import Main from "pages/MainPage/Main";
import Movie from "pages/MoviePage/Movie";
import Actors from "pages/TopActorsPage/Actors";
import ActorPage from "pages/ActorPage/ActorPage";
import InputPage from "pages/SearchPage/InputPage";
import NotFoundPage from "pages/NotFoundPage/WrongPath";
import MoviesPage from "pages/NewMoviesPage/MoviesPage";

import MainContainer from "containers/Main/Main";

function App() {
  const { burgerActive } = useSelector(({ search }) => search);
  return (
    <>
      <BurgerMenu />
      <div className={`layout ${burgerActive ? "layout--transform" : ""}`}>
        <Header />
        <MainContainer>
          <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/actors" exact component={Actors} />
            <Route path="/movies" exact component={MoviesPage} />
            <Route path="/search" component={InputPage} />
            <Route path="/movies/:movie" component={Movie} />
            <Route path="/actors/:actor" component={ActorPage} />
            <Route component={NotFoundPage} />
          </Switch>
        </MainContainer>
      </div>
      <DeveloperLink />
    </>
  );
}

export default App;
