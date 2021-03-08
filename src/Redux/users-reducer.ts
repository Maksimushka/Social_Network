import {ActionsTypes} from './state';

export enum ActionTypes {
    SET_IS_FETCHING = 'SET_IS_FETCHING',
    SET_USERS_COUNT = 'SET_USERS_COUNT',
    SET_CURRENT_PAGE = 'SET_CURRENT_PAGE',
    SET_USERS = 'SET_USERS',
    UNFOLLOW = 'UNFOLLOW',
    FOLLOW = 'FOLLOW',
    FOLLOWING_IN_PROGRESS = 'FOLLOWING_IN_PROGRESS',
}

export type UserReducerType = {
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
export type UsersReducerStateType = {
    users: UserReducerType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: [] | number[]
}

export type FollowACType = {
    type: ActionTypes.FOLLOW
    userId: number
}
export type unFollowACType = {
    type: ActionTypes.UNFOLLOW
    userId: number
}
export type setUsersACType = {
    type: ActionTypes.SET_USERS
    users: UserReducerType[]
}
export type setCurrentPageACType = {
    type: ActionTypes.SET_CURRENT_PAGE
    currentPage: number
}
export type setUsersCountACType = {
    type: ActionTypes.SET_USERS_COUNT
    usersCount: number
}
export type setIsFetchingACType = {
    type: ActionTypes.SET_IS_FETCHING
    isFetching: boolean
}
export type setFollowingACType = {
    type: ActionTypes.FOLLOWING_IN_PROGRESS
    isLoading: boolean
    userId: number
}

let initialState: UsersReducerStateType = {
    users: [],
    pageSize: 5,
    totalUsersCount: 23,
    isFetching: true,
    currentPage: 1,
    followingInProgress: []
}

export const usersReducer = (state = initialState, action: ActionsTypes): UsersReducerStateType => {
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

export const followAC = (userId: number): FollowACType => ({type: ActionTypes.FOLLOW, userId})
export const unFollowAC = (userId: number): unFollowACType => ({type: ActionTypes.UNFOLLOW, userId})
export const setUsersAC = (users: UserReducerType[]): setUsersACType => ({type: ActionTypes.SET_USERS, users: users})
export const setCurrentPageAC = (currentPage: number): setCurrentPageACType => ({
    type: ActionTypes.SET_CURRENT_PAGE,
    currentPage
})
export const setUsersCountAC = (usersCount: number): setUsersCountACType => ({
    type: ActionTypes.SET_USERS_COUNT,
    usersCount
})
export const setIsFetchingAC = (isFetching: boolean): setIsFetchingACType => ({
    type: ActionTypes.SET_IS_FETCHING,
    isFetching
})
export const setIsFollowingAC = (userId: number, isLoading: boolean): setFollowingACType => ({
        type: ActionTypes.FOLLOWING_IN_PROGRESS,
        userId,
        isLoading
})

