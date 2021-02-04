import {RootStateType, StoreType} from "./Redux/state";
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import React from "react";

export const rerenderEntireTree = (store: StoreType) => {
    ReactDOM.render(
        <BrowserRouter><App dialogsPage={store._state.dialogsPage} profilePage={store._state.profilePage}/></BrowserRouter>
        , document.getElementById('root'));
}