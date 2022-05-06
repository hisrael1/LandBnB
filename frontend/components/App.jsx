import React from "react";
// Import navbar container
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/LoginFormContainer";
import SignupFormContainer from "./session_form/SignupFormContainer";
import { Redirect, Switch, Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";
import Splash from "./splash/splash";

// I think I need to set up my router to only show all of the components I'm about to create if I'm logged in, by using routes.
// I think I need to create bunch of components and then style those components.
const App = () => (
    <Switch>
        {/* Just changed from reg route. Anything else I need to do? */}
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
        <Route path = "/" component={Splash} />
    </Switch>
);

export default App;