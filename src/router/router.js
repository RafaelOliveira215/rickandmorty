import React from "react";
import { Route, BrowserRouter, Switch } from "react-router-dom";
import CharacterPage from "../screens/characterPage/characterPage";
import CharacterDetailsPage from "../screens/characterDetailsPage/characterDetailsPage";
import ErrorPage from "../screens/errorPage/errorPage"

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <CharacterPage />
        </Route>

        <Route exact path="/characterdetails/:id/:episodes">
          <CharacterDetailsPage />
        </Route>

       <Route>
         <ErrorPage/>
       </Route>

      </Switch>
    </BrowserRouter>
  );
};
export default Router;
