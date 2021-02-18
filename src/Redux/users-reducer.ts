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

export const followAC = (userId: number) => {
    return {
        type: "FOLLOW",
        userId: userId
    } as const
}
export const unFollowAC = (userId: number) => {
    return {
        type: "UNFOLLOW",
        userId: userId
    } as const
}
export const setUsersAC = (users: UserReducerType[]) => {
    return {
        type: "SET_USERS",
        users: users
    } as const
}

let initialState:UsersReducerStateType  = {
    users: []
}



// export type UsersReducerPageType = {
//     usersPage: (state: UsersReducerStateType, action: ActionsTypes) => void
//     users: UsersReducerStateType
// }

export const usersReducer = (state = initialState, action: ActionsTypes): UsersReducerStateType => {

    switch (action.type) {
        case "FOLLOW":
            return {
                ...state,
                users: state.users.map( u => {
                        if (u.id === action.userId) {
                        return {
                            ...u, followed: true
                        }
                    }
                    return u
                })
            }
        case "UNFOLLOW":
            return {
                ...state,
                users: state.users.map( u => {
                    if (u.id === action.userId) {
                        return {
                            ...u, followed: false
                        }
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