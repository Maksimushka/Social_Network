import {followAC, FollowACType, setUsersAC, setUsersACType, unFollowAC, unFollowACType} from "./users-reducer";
import {addPostACType, updateNewPostTextACType} from "./profile-reducer";
import {addMessageACType, updateNewMessageTextACType} from "./dialogs-reducer";

export type PostsType = {
    id: number
    message: string
    likesCount: number
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
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
}
export type ActionsTypes = setUsersACType | FollowACType | unFollowACType |
    updateNewPostTextACType | addPostACType |
    updateNewMessageTextACType | addMessageACType


export type StoreType = {
    subscribe: (callback: () => void ) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

