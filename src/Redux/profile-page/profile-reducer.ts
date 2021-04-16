import {PostsType} from '../../components/Profile/MyPosts/MyPostsContainer';
import { ProfileActionsType } from './profile-actions';

export type userProfileType = {
    aboutMe: string
    contacts: {
        'facebook': string
        'website': null,
        'vk': string
        'twitter': string
        'instagram': string
        'youtube': null
        'github': string
        'mainLink': null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string
    fullName: string
    userId: number
    photos: {
        small: string
        large: string
    }
}
export type ProfilePageType = {
    posts: Array<PostsType>
    profile: userProfileType | null
    status: string
}

let initialState: ProfilePageType = {
    posts: [{id: 1, message: 'Hi, how are you?', likesCount: 16},
        {id: 2, message: 'I\'m a programmer', likesCount: 56},
        {id: 3, message: 'It\'s my first post', likesCount: 3},],
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action: ProfileActionsType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: new Date().getTime(), message: action.newText, likesCount: 0}
            return {
                ...state,
                posts: [newPost, ...state.posts]
            }
        case 'SET_USER_PROFILE': {
            return {
                ...state,
                profile: action.profile
            }
        }
        case 'SET_USER_STATUS': {
            return {
                ...state,
                status: action.status
            }
        }
        case 'REMOVE_POST': {
            return {
                ...state,
                posts: state.posts.filter(el => el.id !== action.id)
            }
        }
        case 'SET_PHOTO': {
            debugger
            return {
                ...state,
                profile: {...state.profile!, photos: action.photo}
            }
        }
        default :
            return state
    }
}