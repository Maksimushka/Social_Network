import {setUserDataACType, setUserPhotoACType} from './auth-actions';

type ActionType = setUserDataACType | setUserPhotoACType
export type authReducerType = {
    userId: any,
    email: any,
    login: any,
    isAuth: boolean,
    photo: string | null
}

const initialState: authReducerType = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    photo: null,
}

const authReducer = (state = initialState, action: ActionType): authReducerType => {
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

export default authReducer;