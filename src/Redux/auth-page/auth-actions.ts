import {authAPI, profileAPI, securityAPI} from '../../api/api';
import {Dispatch} from 'redux';
import {stopSubmit} from 'redux-form';

// TYPES
export type setUserDataACType = {
    type: 'SET_USER_DATA',
    data: any
}
export type setUserPhotoACType = {
    type: 'SET_USER_PHOTO',
    photo: string
}
export type setCaptchaACType = {
    type: 'SET_CAPTCHA',
    captchaUrl: string
}

// ACTION CREATORS
export const setUserDataAC = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): setUserDataACType => ({
    type: 'SET_USER_DATA',
    data: {userId, email, login, isAuth}
})
export const setUserPhotoAC = (photo: string): setUserPhotoACType => ({
    type: 'SET_USER_PHOTO',
    photo
})
export const setCaptchaAC = (captchaUrl: string): setCaptchaACType => ({
    type: 'SET_CAPTCHA',
    captchaUrl
})

// THUNK CREATORS
export const getAuth = () => async (dispatch: any) => {
    let resp = await authAPI.getAuth()
    if (resp.resultCode === 0) {
        let {id, login, email} = resp.data
        dispatch(setUserDataAC(id, email, login, true))
        let {data} = await profileAPI.getUser(id)
        dispatch(setUserPhotoAC(data.photos.small))
    }

}
export const setLogin = (email: string, pass: string, rememberMe: boolean, captcha?: string) => async (dispatch: any) => {
    let resp = await authAPI.login(email, pass, rememberMe, captcha)
    if (resp.resultCode === 0) {
        dispatch(getAuth())
    } else {
        if (resp.resultCode === 10) {
            dispatch(getCaptcha())
        }
        const message = resp.messages.length > 0 ? resp.messages[0] : 'Some error'
        dispatch(stopSubmit('login', {_error: message}))
    }
}
export const setLogout = () => async (dispatch: Dispatch) => {
    const resp = await authAPI.logout()
    if (resp.data.resultCode === 0) {
        dispatch(setUserDataAC(null, null, null, false))
    }
}
export const getCaptcha = () => async (dispatch: any) => {
    const {data} = await securityAPI.getCaptchaUrl()
    dispatch(setCaptchaAC(data.url))
}