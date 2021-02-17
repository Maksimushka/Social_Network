import {combineReducers, createStore } from "redux";
import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";
import {DialogsPageType, ProfilePageType} from "./state";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer
})

export type ReducersType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
}

export let store = createStore(reducers)
