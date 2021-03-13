import {PostsType} from '../../components/Profile/MyPosts/MyPostsContainer';
import {addPostACType, setUserProfileACType, updateNewPostTextACType} from './profile-actions';

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
    profile: userProfileType | null
}

export type ActionType = updateNewPostTextACType | addPostACType  |  setUserProfileACType

let initialState: ProfilePageType = {
        posts: [ {id: 1, message: "Hi, how are you?", likesCount: 16},
            {id: 2, message: "I'm a programmer", likesCount: 56},
            {id: 3, message: "It's my first post", likesCount: 3}, ],
        newPostText: "",
        profile: null
}

export const profileReducer = (state = initialState, action: ActionType): ProfilePageType => {
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