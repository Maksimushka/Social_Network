import {Dispatch} from 'redux';
import {authAPI} from '../api/api';
import {getAuth} from './auth-page/auth-actions';

enum ActionsTypes {
    SET_INITIALIZED = 'SET_INITIALIZED'
}

export type AppReducerType = {
    initialized: boolean
}

let initialState: AppReducerType = {
    initialized: false
}

export const appReducer = (state:AppReducerType = initialState, action: any): AppReducerType => {
    switch (action.type) {
        case ActionsTypes.SET_INITIALIZED:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}

export const setInitializedAC = () => ({
    type: ActionsTypes.SET_INITIALIZED
})

export const initializeApp = () => (dispatch: any) => {
    let dispatchResult = dispatch(getAuth())
    Promise.all([dispatchResult]).then(() => {
        dispatch(setInitializedAC())
    })
}