import React from "react";
import ReactDOM from "react-dom";
import Root from "./components/root";
import configureStore from './store/store';


/// I'm gettting an error because my package json is incomplete
// I need to reinstall my package json. Might wanna push to github first.
document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    // for testing purposes
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    // window.login = login;
    const root = document.getElementById("root");
    ReactDOM.render(<Root store={store} />, root);
});