import React from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Movie from "./components/Movie/Movie";
import ActorPage from "./components/ActorPage/ActorPage";
import Actors from "./components/Actors/Actors";
import Main from "./components/Main/Main";
import { Footer } from "./components/Footer/Footer";
import NotFoundPage from "./components/WrongPath/WrongPath";
import MoviesPage from "./components/MoviesPage/MoviesPage";
import BurgerMenu from "./components/BurgerMenu/BurgerMenu";

import MainContainer from "./containers/Main/Main";

import InputPage from "./components/InputPage/InputPage";

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
        <Footer />
      </div>
    </>
  );
}

export default App;
