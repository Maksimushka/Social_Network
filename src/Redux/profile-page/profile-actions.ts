import {userProfileType} from './profile-reducer';
import {profileAPI} from '../../api/api';
import {Dispatch} from 'redux';

// TYPES
export type addPostACType = {
    type: 'ADD-POST'
    newText: string
}
export type setUserProfileACType = {
    type: 'SET_USER_PROFILE'
    profile: userProfileType
}
export type setUserStatusACType = {
    type: 'SET_USER_STATUS'
    status: string
}
export type removePostACType = {
    type: 'REMOVE_POST'
    id: number
}

// ACTION CREATORS
export const addPostAC = (newText: string): addPostACType => ({
    type: 'ADD-POST',
    newText
})
export const setUserProfileAC = (profile: userProfileType): setUserProfileACType => ({
    type: 'SET_USER_PROFILE',
    profile
})
export const setUserStatusAC = (status: string): setUserStatusACType => ({
    type: 'SET_USER_STATUS',
    status
})
export const removePostAC = (id: number): removePostACType => ({
    type: 'REMOVE_POST',
    id
})

// THUNK CREATORS
export const getUserProfile = (userId: number) => async (dispatch: Dispatch) => {
    let {data} = await profileAPI.getUser(userId)
    dispatch(setUserProfileAC(data))

}
export const getUserStatus = (userId: number) => async (dispatch: Dispatch) => {
    let {data} = await profileAPI.getStatus(userId)
    dispatch(setUserStatusAC(data))
}
export const changeUserStatus = (status: string) => async (dispatch: Dispatch) => {
    let {data} = await profileAPI.changeStatus(status)
    if (data.resulCode === 0) {
        dispatch(setUserStatusAC(status))
    }
}
