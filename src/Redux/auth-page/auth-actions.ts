export type setUserDataACType = {
    type: 'SET_USER_DATA',
    data: any
}
export type setUserPhotoACType = {
    type: 'SET_USER_PHOTO',
    photo: string
}

export const setUserDataAC = (userId: number, email: string, login: string): setUserDataACType => (
    {type: 'SET_USER_DATA', data: {userId, email, login}}
)
export const setUserPhotoAC = (photo: string): setUserPhotoACType => (
    {type: 'SET_USER_PHOTO', photo: photo}
)