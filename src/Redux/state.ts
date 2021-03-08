import {
    FollowACType,
    setCurrentPageACType, setFollowingACType,
    setIsFetchingACType,
    setUsersACType,
    setUsersCountACType,
    unFollowACType, UsersReducerStateType
} from './users-reducer';
import {addPostACType, ProfilePageType, setUserProfileACType, updateNewPostTextACType} from './profile-reducer';
import {addMessageACType, updateNewMessageTextACType} from "./dialogs-reducer";
import {setUserDataACType, setUserPhotoACType} from './auth-reducer';

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}
export type DialogsPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
export type RootStateType = {
    profilePage: ProfilePageType
    dialogsPage: DialogsPageType
    usersPage: UsersReducerStateType
}
export type ActionsTypes = setUsersACType | FollowACType | unFollowACType |
    updateNewPostTextACType | addPostACType | updateNewMessageTextACType
    | addMessageACType | setCurrentPageACType | setUsersCountACType |
    setIsFetchingACType | setUserProfileACType | setUserDataACType | setUserPhotoACType
| setFollowingACType


export type StoreType = {
    subscribe: (callback: () => void ) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

