import {ActionsTypes} from "./state";

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
}
export type FollowACType = {
    type: "FOLLOW"
    userId: number
}
export type unFollowACType = {
    type: "UNFOLLOW"
    userId: number
}
export type setUsersACType = {
    type: "SET_USERS"
    users: UserReducerType[]
}
export type setCurrentPageACType = {
    type: 'SET_CURRENT_PAGE'
    currentPage: number
}
export type setUsersCountACType = {
    type: 'SET_USERS_COUNT'
    usersCount: number
}
export type setIsFetchingACType = {
    type: 'SET_IS_FETCHING'
    isFetching: boolean
}

let initialState:UsersReducerStateType  = {
    users: [],
    pageSize: 5,
    totalUsersCount: 23,
    isFetching: true,
    currentPage: 1,
}

export const usersReducer = (state = initialState, action: ActionsTypes): UsersReducerStateType => {
    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map( u => {
                        if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u
                })
            }
        case "SET_USERS":
            return {
                ...state,
                users: action.users
            }
        case 'SET_CURRENT_PAGE': {
            return {
                ...state,
                currentPage: action.currentPage
            }
        }
        case 'SET_USERS_COUNT': {
            return {
                ...state,
                totalUsersCount: action.usersCount
            }
        }
        case 'SET_IS_FETCHING': {
            return {
                ...state,
                isFetching: action.isFetching
            }
        }
        default:
            return state
    }
}

export const followAC = (userId: number): FollowACType =>  ( {type: "FOLLOW", userId: userId} )
export const unFollowAC = (userId: number): unFollowACType => ( {type: "UNFOLLOW", userId: userId} )
export const setUsersAC = (users: UserReducerType[]): setUsersACType => ({ type: "SET_USERS", users: users} )
export const setCurrentPageAC = (currentPage: number): setCurrentPageACType => ({ type: 'SET_CURRENT_PAGE', currentPage: currentPage} )
export const setUsersCountAC = (usersCount: number): setUsersCountACType => ({ type: 'SET_USERS_COUNT', usersCount: usersCount} )
export const setIsFetchingAC = (isFetching: boolean): setIsFetchingACType => ({ type: 'SET_IS_FETCHING', isFetching: isFetching} )

