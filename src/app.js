import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";

import "app.css";

import {Header} from "components/header";
import {BurgerMenu} from "components/burger-menu";
import {DeveloperLink} from "components/developer-link";
import {Main} from "pages/main";
import {PageMovie as MoviePage} from "pages/movie";
import {Actors} from "pages/top-actors";
import {ActorPage} from "pages/actor";
import {InputPage} from "pages/search";
import {WrongPath as NotFoundPage} from "pages/not-found";
import {MoviesPage} from "pages/new-movies";

function App() {
  const { burgerActive } = useSelector(({ search }) => search);
  return (
    <>
      <BurgerMenu />
      <div className={`layout ${burgerActive ? "layout--transform" : ""}`}>
        <Header />
          <main className="section">
              <Switch>
                <Route path="/" exact component={Main} />
                <Route path="/actors" exact component={Actors} />
                <Route path="/movies" exact component={MoviesPage} />
                <Route path="/search" component={InputPage} />
                <Route path="/movies/:movie" component={MoviePage} />
                <Route path="/actors/:actor" component={ActorPage} />
                <Route component={NotFoundPage} />
              </Switch>
          </main>
      </div>
      <DeveloperLink />
    </>
  );
}

export default App;
