import {setCaptchaACType, setUserDataACType, setUserPhotoACType} from './auth-actions';

type ActionType = setUserDataACType | setUserPhotoACType | setCaptchaACType
export type authReducerType = {
    userId: number | null,
    email: string | null,
    login: string | null,
    isAuth: boolean,
    photo: string | null,
    captcha: string | null
}

const initialState: authReducerType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null,
    captcha: null
}

const authReducer = (state = initialState, action: ActionType): authReducerType => {
    switch (action.type) {
        case 'SET_USER_DATA': {
            return { ...state, ...action.data }
        }
        case 'SET_USER_PHOTO': {
            return { ...state, photo: action.photo }
        }
        case 'SET_CAPTCHA': {
            return {...state, captcha: action.captchaUrl}
        }
        default :
            return state
    }
};

export default authReducer;