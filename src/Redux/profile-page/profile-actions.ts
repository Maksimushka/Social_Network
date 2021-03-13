import {userProfileType} from './profile-reducer';

export type addPostACType = {
    type: "ADD-POST"
}
export type setUserProfileACType = {
    type: "SET_USER_PROFILE"
    profile: userProfileType
}
export type updateNewPostTextACType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}

export const addPostAC = (): addPostACType => ({ type: "ADD-POST" })
export const setUserProfileAC = (profile: userProfileType): setUserProfileACType => ({
        type: "SET_USER_PROFILE",
        profile: profile
})
export const updateNewPostTextAC = (newText: string): updateNewPostTextACType => ({
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
})
