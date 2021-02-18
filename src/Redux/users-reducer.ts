import {ActionsTypes} from "./state";

export type UserReducerType = {
    id: number
    name: string
    followed: boolean
    status: string
    photoURL: string
    location: {
        city: string
        country: string
    }
}
export type UsersReducerStateType = {
    users: UserReducerType[]
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

export const followAC = (userId: number): FollowACType => {
    return {
        type: "FOLLOW",
        userId: userId
    }
}
export const unFollowAC = (userId: number): unFollowACType => {
    return {
        type: "UNFOLLOW",
        userId: userId
    }
}
export const setUsersAC = (users: UserReducerType[]): setUsersACType => {
    return {
        type: "SET_USERS",
        users: users
    }
}

let initialState:UsersReducerStateType  = {
    users: []
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
                users: [...state.users, ...action.users]
            }
        default:
            return state
    }

}