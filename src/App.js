import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Movie from "./pages/MoviePage/Movie";
import ActorPage from "./pages/ActorPage/ActorPage";
import Actors from "./pages/TopActorsPage/Actors";
import Main from "./pages/MainPage/Main";
import { DeveloperLink } from "./components/DeveloperLink/Footer";
import NotFoundPage from "./pages/NotFoundPage/WrongPath";
import MoviesPage from "./pages/NewMoviesPage/MoviesPage";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

import MainContainer from "./containers/Main/Main";

import InputPage from "./pages/SearchPage/InputPage";

import "./App.css";
import { useSelector } from "react-redux";

function App() {
  const {burgerActive} = useSelector(({ search }) => search);
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
