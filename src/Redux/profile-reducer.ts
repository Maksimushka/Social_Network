import {ActionsTypes, PostsType} from './state';

export type userProfileType = {
    "aboutMe": string
    "contacts": {
        facebook: string
        website: null,
        vk: string
        twitter: string
        instagram: string
        youtube: null
        github: string
        mainLink: null
    },
    lookingForAJob: true,
    lookingForAJobDescription: string
    fullName: string
    userId: 2
    photos: {
        "small": string
        "large": string
    }
}
export type ProfilePageType = {
    posts: Array<PostsType>
    newPostText: string
    profile: any
}
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

let initialState: ProfilePageType = {
        posts: [ {id: 1, message: "Hi, how are you?", likesCount: 16},
            {id: 2, message: "I'm a programmer", likesCount: 56},
            {id: 3, message: "It's my first post", likesCount: 3}, ],
        newPostText: "",
        profile: null
}

export const profileReducer = (state = initialState, action: ActionsTypes): ProfilePageType => {
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
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        default :
            return state
    }
}
export const addPostAC = (): addPostACType => {
    return {
        type: "ADD-POST"
    }
}
export const setUserProfileAC = (profile: userProfileType): setUserProfileACType => {
    return {
        type: "SET_USER_PROFILE",
        profile: profile
    }
}
export const updateNewPostText = (newText: string): updateNewPostTextACType => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    }
}