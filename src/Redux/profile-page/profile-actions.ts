import {userProfileType} from './profile-reducer';
import {profileAPI} from '../../api/api';
import {Dispatch} from 'redux';

// TYPES
export type addPostACType = {
    type: "ADD-POST"
}
export type setUserProfileACType = {
    type: "SET_USER_PROFILE"
    profile: userProfileType
}
export type setUserStatusACType = {
    type: "SET_USER_STATUS"
    status: string
}
export type updateNewPostTextACType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}

// ACTION CREATORS
export const addPostAC = (): addPostACType => ({ type: "ADD-POST" })
export const setUserProfileAC = (profile: userProfileType): setUserProfileACType => ({
        type: "SET_USER_PROFILE",
        profile: profile
})
export const updateNewPostTextAC = (newText: string): updateNewPostTextACType => ({
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
})
export const setUserStatusAC = (status: string): setUserStatusACType => ({
    type: "SET_USER_STATUS",
    status: status
})

// THUNK CREATORS
export const getUserProfile = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getUser(userId).then((data) => {
        dispatch(setUserProfileAC(data))
    })
}
export const getUserStatus = (userId: number) => (dispatch: Dispatch) => {
    profileAPI.getStatus(userId).then( (data) => {
        dispatch(setUserStatusAC(data))
    })
}
export const changeUserStatus = (status: string) => (dispatch: Dispatch) => {
    profileAPI.changeStatus(status).then( (resp) => {
        if (resp.data.resulCode === 0) {
            dispatch(setUserStatusAC(status))
        }
    })
}
