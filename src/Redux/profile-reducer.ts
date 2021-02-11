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

export const profileReducer = (state: ProfilePageType, action: ActionsTypes) => {

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