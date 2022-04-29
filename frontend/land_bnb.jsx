import React from "react";
import ReactDOM from "react-dom";

document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    // window.login = login;
    const root = document.getElementById("root");
    ReactDOM.render(<h1>Congrats, you broke React!</h1>, root);
});