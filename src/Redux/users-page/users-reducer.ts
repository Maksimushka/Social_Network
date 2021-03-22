import {
    FollowACType,
    setCurrentPageACType, setFollowingACType,
    setIsFetchingACType,
    setUsersACType,
    setUsersCountACType,
    unFollowACType
} from './users-actions';

export enum ActionTypes {
    SET_IS_FETCHING = 'SET_IS_FETCHING',
    SET_USERS_COUNT = 'SET_USERS_COUNT',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_USERS = 'SET_USERS',
    UNFOLLOW = 'UNFOLLOW',
    FOLLOW = 'FOLLOW',
    FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS',
}

type ActionType = FollowACType | unFollowACType | setUsersACType |
    setCurrentPageACType | setUsersCountACType | setIsFetchingACType |
    setFollowingACType
export type UsersType = {
    id: number
    name: string
    followed: boolean
    status: null
    uniqueUrlName: null
    photos: {
        small: null
        large: null
    }
}
export type UsersReducerType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: [] | number[]
}

let initialState: UsersReducerType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 23,
    isFetching: true,
    currentPage: 1,
    followingInProgress: []
}

export const usersReducer = (state:UsersReducerType = initialState, action: ActionType): UsersReducerType => {
    switch (action.type) {
        case ActionTypes.FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }
        case ActionTypes.UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case ActionTypes.SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case ActionTypes.SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case ActionTypes.SET_USERS_COUNT: {
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        }
        case ActionTypes.SET_IS_FETCHING: {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        case ActionTypes.FOLLOWING_IN_PROGRESS: {
            return {
                ...state,
                followingInProgress:
                    action.isLoading
                        ? [...state.followingInProgress, action.userId]
                        : state.followingInProgress.filter(el => el !== action.userId)
            }
        }
        default:
            return state
    }
}
