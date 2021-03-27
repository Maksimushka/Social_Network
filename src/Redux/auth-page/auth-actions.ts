import {authAPI, profileAPI} from '../../api/api';
import {Dispatch} from 'redux';

// TYPES
export type setUserDataACType = {
    type: 'SET_USER_DATA',
    data: any
}
export type setUserPhotoACType = {
    type: 'SET_USER_PHOTO',
    photo: string
}

// ACTION CREATORS
export const setUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setUserDataACType => ({
        type: 'SET_USER_DATA',
        data: {userId, email, login, isAuth}
})
export const setUserPhotoAC = (photo: string): setUserPhotoACType => ({
    type: 'SET_USER_PHOTO',
    photo: photo
})

// THUNK CREATORS
export const getAuth = () => (dispatch: any) => {
    authAPI.getAuth().then(({data}) => {
        if (data.resultCode === 0) {
            let {id, login, email } = data.data
            dispatch(setUserDataAC(id, email, login, true))
            profileAPI.getUser(id).then((resp) => {
                dispatch(setUserPhotoAC(resp.photos.small))
            })
        }
    })
}
export const setLogin = (email: string, pass: string, rememberMe: boolean) => (dispatch: any) => {
    authAPI.login(email, pass, rememberMe)
        .then((resp) => {
        if (resp.data.resultCode === 0) {
            dispatch(getAuth())
        }
    })
}
export const setLogout = () => (dispatch: Dispatch) => {
    authAPI.logout().then((resp) => {
        if (resp.data.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false))
        }
    })
}