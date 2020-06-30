import React from "react";
import {useSelector} from "react-redux";
import { Route, Switch } from "react-router-dom";
import "./app.css";

import {Header, BurgerMenu, DeveloperLink} from "components";
import {Main, MoviePage, Actors, ActorPage, InputPage, NotFoundPage, MoviesPage, } from "pages";

interface RootState {
    burgerIsActive: boolean
}

function App() {
  const burgerIsActive = useSelector(({ search }: { search: RootState }) => search.burgerIsActive);
  return (
    <>
      <BurgerMenu />
      <div className={`layout${burgerIsActive ? " layout--transform" : ""}`}>
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
