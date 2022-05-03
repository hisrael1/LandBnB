import React from "react";
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "./session_form/LoginFormContainer";
import SignupFormContainer from "./session_form/SignupFormContainer";
import { Route } from "react-router-dom";
import { AuthRoute } from "../util/route_util";

const App = () => (
    <div>
        <header>
            <GreetingContainer />
        </header>
        <Route path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} />
    </div>
);

export default App;