import React from 'react';
import {ActionsTypes, PostsType} from './state';

export type setUserDataACType = {
    type: 'SET_USER_DATA',
    data: any
}
export type setUserPhotoACType = {
    type: 'SET_USER_PHOTO',
    photo: string
}
export type authReducerType = {
    userId: any,
    email: any,
    login: any,
    isAuth: boolean,
    photo: string | null
}

let initialState: authReducerType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null,
}

const authReducer = (state = initialState, action: ActionsTypes): authReducerType => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        }
        case 'SET_USER_PHOTO': {
            return {
                ...state,
                photo: action.photo
            }
        }
        default :
            return state
    }
};


export const setUserDataAC = (userId: number, email: string, login: string): setUserDataACType => (
    {type: 'SET_USER_DATA', data: {userId, email, login}}
)
export const setUserPhotoAC = (photo: string): setUserPhotoACType => (
    {type: 'SET_USER_PHOTO', photo: photo}
)
export default authReducer;