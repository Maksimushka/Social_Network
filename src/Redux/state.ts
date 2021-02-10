import {profileReducer} from "./profile-reducer";
import {dialogsReducer} from "./dialogs-reducer";

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
export type AddPostType = (postMessage: string) => void
export type AddMessageType = (MessageValue: string) => void
export type ActionsTypes = ReturnType<typeof updateNewPostText> | ReturnType<typeof addPostAC> |
    ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageText>
export type StoreType = {
    _state: RootStateType
    _onChange: () => void
    _updateNewPostText: (newText: string) => void
    _addPost: AddPostType
    _updateNewMessageText: (newText: string) => void
    _addMessage: AddMessageType
    subscribe: (callback: () => void ) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export const addPostAC = (postText: string) => {
    return {
        type: "ADD-POST",
        postText: postText
    } as const
}
export const updateNewPostText = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}
export const addMessageAC = (messageText: string) => {
    return {
        type: "ADD-MESSAGE",
        messageText: messageText
    } as const
}
export const updateNewMessageText = (newText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newText: newText
    } as const
}

const store: StoreType = {
    _state: {
        profilePage: {
            posts: [ {id: 1, message: "Hi, how are you?", likesCount: 16},
                {id: 2, message: "I'm a programmer", likesCount: 56},
                {id: 3, message: "It's my first post", likesCount: 3}, ],
            newPostText: "",
        },
        dialogsPage: {
            dialogs: [
                {name: "Dimych", id: 1 },
                {name: "Andrey", id: 2 },
                {name: "Galina", id: 3 },
                {name: "Victor", id: 4 },
                {name: "Maxim", id: 5 },
                {name: "Sveta", id: 6 },
            ],
            messages: [
                {id: 1, message:"Hello" },
                {id: 2, message:"Hi" },
                {id: 3, message:"You are right?" },
                {id: 4, message:"Yes, i am!" },
            ],
            newMessageText: "",
        },
    },
    _updateNewPostText(newText:string) {
        this._state.profilePage.newPostText = newText
        this._onChange()
    },
    _addPost(postMessage: string) {
        let newPost = { id: new Date().getTime(),  message: postMessage,  likesCount: 0 }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._onChange()
    },
    _addMessage(MessageValue: string) {
        let newMessage = { id: 4,  message: MessageValue }
        this._state.dialogsPage.messages.push(newMessage)
        this._state.dialogsPage.newMessageText = ""
        this._onChange()
    },
    _updateNewMessageText(newText) {
        this._state.dialogsPage.newMessageText = newText
        this._onChange()
    },
    _onChange() {
        console.log("hello")
    },
    subscribe(callback)  {
        this._onChange = callback
    },
    getState() {
      return this._state
    },

    dispatch(action) {
        profileReducer(store, action)
        dialogsReducer(store, action)
    }
}

export default store
