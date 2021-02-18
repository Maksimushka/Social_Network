import {ActionsTypes, ProfilePageType} from "./state";

export type addPostACType = {
    type: "ADD-POST"
}
export type updateNewPostTextACType = {
    type: "UPDATE-NEW-POST-TEXT",
    newText: string
}

export const addPostAC = (): addPostACType => {
    return {
        type: "ADD-POST"
    }
}
export const updateNewPostText = (newText: string): updateNewPostTextACType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    }
}

let initialState = {
        posts: [ {id: 1, message: "Hi, how are you?", likesCount: 16},
            {id: 2, message: "I'm a programmer", likesCount: 56},
            {id: 3, message: "It's my first post", likesCount: 3}, ],
        newPostText: "",
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: new Date().getTime(), message: state.newPostText, likesCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ""
            }
        case "UPDATE-NEW-POST-TEXT":
            return {
                ...state,
                newPostText: action.newText
            }
        default :
            return state
    }
    
}