import React from "react"
import {Route,BrowserRouter,Switch} from "react-router-dom"
import CharacterPage from "../screens/characterPage/characterPage"
import CharacterDetailsPage from "../screens/characterDetailsPage/characterDetailsPage"



const Router =()=>{

    return(
        <BrowserRouter>
        <Switch>

           <Route exact path="/">
            <CharacterPage/>
           </Route>

           <Route exact path="/characterdetails/:id">
            <CharacterDetailsPage/>
           </Route>

        </Switch>
        </BrowserRouter>
    )

}
export default Router