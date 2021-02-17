import {ActionsTypes, ProfilePageType} from "./state";

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

let initialState = {
        posts: [ {id: 1, message: "Hi, how are you?", likesCount: 16},
            {id: 2, message: "I'm a programmer", likesCount: 56},
            {id: 3, message: "It's my first post", likesCount: 3}, ],
        newPostText: "",
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-POST":
            let newPost = {id: new Date().getTime(), message: action.postText, likesCount: 0}
            state.posts.push(newPost)
            state.newPostText = ""
            break;
        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText
            break
        default :
            return state
    }

    return state
}