import {authAPI, profileAPI} from '../../api/api';

export type setUserDataACType = {
    type: 'SET_USER_DATA',
    data: any
}
export type setUserPhotoACType = {
    type: 'SET_USER_PHOTO',
    photo: string
}

export const setUserDataAC = (userId: number, email: string, login: string): setUserDataACType => ({
        type: 'SET_USER_DATA',
        data: {userId, email, login}
})
export const setUserPhotoAC = (photo: string): setUserPhotoACType => ({
    type: 'SET_USER_PHOTO',
    photo: photo
})

export const getAuth = () => (dispatch: any) => {
    authAPI.getAuth().then(({data}) => {
        if (data.resultCode === 0) {
            let {id, login, email } = data.data
            dispatch(setUserDataAC(id, email, login))
            profileAPI.getUser(id).then((resp) => {
                dispatch(setUserPhotoAC(resp.photos.small))
            })
        }
    })
}