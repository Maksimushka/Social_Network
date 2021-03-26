import {applyMiddleware, combineReducers, createStore} from 'redux';
import {profileReducer} from "./profile-page/profile-reducer";
import {dialogsReducer} from "./dialogs-page/dialogs-reducer";
import {usersReducer} from "./users-page/users-reducer";
import authReducer from './auth-page/auth-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer
})

export type RootStateReduxType = ReturnType<typeof reducers>

export let store = createStore(reducers, applyMiddleware(thunk))
