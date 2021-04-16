import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {profileReducer} from "./profile-page/profile-reducer";
import {dialogsReducer} from "./dialogs-page/dialogs-reducer";
import {usersReducer} from "./users-page/users-reducer";
import authReducer from './auth-page/auth-reducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form'
import {appReducer} from './app-reducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: usersReducer,
    auth: authReducer,
    form: formReducer,
    appPage: appReducer
})

const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export type RootStoreType = ReturnType<typeof reducers>

export let store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
