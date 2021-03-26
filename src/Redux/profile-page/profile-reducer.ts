import {PostsType} from '../../components/Profile/MyPosts/MyPostsContainer';
import {addPostACType, setUserProfileACType, setUserStatusACType} from './profile-actions';

export type userProfileType = {
    'aboutMe': string
    'contacts': {
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
        'small': string
        'large': string
    }
}
export type ProfilePageType = {
    posts: Array<PostsType>
    profile: userProfileType | null
    status: string
}

export type ActionType = addPostACType | setUserProfileACType | setUserStatusACType

let initialState: ProfilePageType = {
    posts: [{id: 1, message: 'Hi, how are you?', likesCount: 16},
        {id: 2, message: 'I\'m a programmer', likesCount: 56},
        {id: 3, message: 'It\'s my first post', likesCount: 3},],
    profile: null,
    status: ''
}

export const profileReducer = (state = initialState, action: ActionType): ProfilePageType => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost = {id: new Date().getTime(), message: action.newText, likesCount: 0}
            return {
                ...state,
                posts: [...state.posts, newPost]
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
        default :
            return state
    }
}