import {addPostAC, profileReducer, updateNewPostText} from "./profile-reducer";
import {addMessageAC, dialogsReducer, updateNewMessageText} from "./dialogs-reducer";

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
    ReturnType<typeof addMessageAC> | ReturnType<typeof updateNewMessageText>
export type StoreType = {
    // _state: RootStateType
    // _onChange: () => void
    subscribe: (callback: () => void ) => void
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

// const store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [ {id: 1, message: "Hi, how are you?", likesCount: 16},
//                 {id: 2, message: "I'm a programmer", likesCount: 56},
//                 {id: 3, message: "It's my first post", likesCount: 3}, ],
//             newPostText: "",
//         },
//         dialogsPage: {
//             dialogs: [
//                 {name: "Dimych", id: 1 },
//                 {name: "Andrey", id: 2 },
//                 {name: "Galina", id: 3 },
//                 {name: "Victor", id: 4 },
//                 {name: "Maxim", id: 5 },
//                 {name: "Sveta", id: 6 },
//             ],
//             messages: [
//                 {id: 1, message:"Hello" },
//                 {id: 2, message:"Hi" },
//                 {id: 3, message:"You are right?" },
//                 {id: 4, message:"Yes, i am!" },
//             ],
//             newMessageText: "",
//         },
//     },
//     _onChange() {
//         console.log("hello")
//     },
//     subscribe(callback)  {
//         this._onChange = callback
//     },
//     getState() {
//       return this._state
//     },
//     dispatch(action) {
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
//         this._onChange()
//     }
// }
//
// export default store
