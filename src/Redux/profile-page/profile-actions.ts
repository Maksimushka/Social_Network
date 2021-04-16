import {userProfileType} from './profile-reducer';
import {profileAPI} from '../../api/api';
import {Dispatch} from 'redux';
import {RootStoreType} from '../redux-store';
import {stopSubmit} from 'redux-form';

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
export type setPhotoACType = {
    type: 'SET_PHOTO',
    photo: any
}

export type ProfileActionsType = addPostACType | setUserProfileACType
    | setUserStatusACType | removePostACType | setPhotoACType

// ACTION CREATORS
export const addPostAC = (newText: string): addPostACType => ({
    type: 'ADD-POST', newText
})
export const setUserProfileAC = (profile: userProfileType): setUserProfileACType => ({
    type: 'SET_USER_PROFILE', profile
})
export const setUserStatusAC = (status: string): setUserStatusACType => ({
    type: 'SET_USER_STATUS', status
})
export const removePostAC = (id: number): removePostACType => ({
    type: 'REMOVE_POST', id
})
export const setPhotoAC = (photo: {small: string, large: string}) => ({
    type: 'SET_PHOTO', photo
})
export const setProfileDataAC = (data: any) => ({
    type: 'SET_PROFILE_DATA', data
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
export const savePhotoTC = (img: string) => async (dispatch: Dispatch) => {
    let {data} = await profileAPI.savePhoto(img)
    if (data.resultCode === 0) {
        dispatch(setPhotoAC(data.data.photos))
    }
}
export const saveProfileDataTC = (profile: string) => async (dispatch: Dispatch<any>, getState: () => RootStoreType ) => {
    const userId = getState().auth.userId
    const {data} = await profileAPI.saveData(profile)
    console.log(data)
    if (data.resultCode === 0) {
        if (userId !== null) {
            dispatch(getUserProfile(userId))
        }
    } else {
        dispatch(stopSubmit('edit-profile', {_error: data.messages[0]}))
        return Promise.reject(data.messages[0])
    }
}
