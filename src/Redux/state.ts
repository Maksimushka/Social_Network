import {addPostAC, profileReducer, updateNewPostText} from "./profile-reducer";
import {addMessageAC, dialogsReducer, updateNewMessageText} from "./dialogs-reducer";
import {followAC, setUsersAC, unFollowAC} from "./users-reducer";

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
export type ActionsTypes = ReturnType<typeof updateNewPostText> | ReturnType<typeof addPostAC> |
                            ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageText> |
                            ReturnType<typeof followAC> | ReturnType<typeof unFollowAC> | ReturnType<typeof setUsersAC>

export type StoreType = {
    subscribe: (callback: () => void ) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

