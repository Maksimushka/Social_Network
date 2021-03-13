import {ActionTypes, UsersType} from './users-reducer';
import {usersAPI} from '../../api/api';

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
    users: UsersType[]
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

export const followAC = (userId: number): FollowACType => ({type: ActionTypes.FOLLOW, userId})
export const unFollowAC = (userId: number): unFollowACType => ({type: ActionTypes.UNFOLLOW, userId})
export const setUsersAC = (users: UsersType[]): setUsersACType => ({type: ActionTypes.SET_USERS, users: users})
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

export const getUsers = (pageSize: number, currentPage: number) => (dispatch: any) => {
    dispatch(setIsFetchingAC(true))
    usersAPI.getUsers(pageSize, currentPage).then(response => {
        dispatch(setIsFetchingAC(false))
        dispatch(setUsersAC(response.items))
        dispatch(setUsersCountAC(response.totalCount))
    })
}
export const setUsers = (currentPage: number, pageSize: number) => (dispatch: any) => {
    dispatch(setCurrentPageAC(currentPage))
    dispatch(setIsFetchingAC(true))
    usersAPI.changePage(currentPage, pageSize).then(response => {
        dispatch(setIsFetchingAC(false))
        dispatch(setUsersAC(response.items))
    })
}
export const follow = (id: number) => (dispatch: any) => {
    dispatch(setIsFollowingAC(id, true))
    usersAPI.follow(id).then(response => {

        if (response.resultCode === 0) {
            dispatch(followAC(id))
        }
        dispatch(setIsFollowingAC(id, false))
    })
}
export const unFollow = (id: number) => (dispatch: any) => {
    dispatch(setIsFollowingAC(id, true))
    usersAPI.unFollow(id).then(response => {
        if (response.resultCode === 0) {
            dispatch(unFollowAC(id))
        }
        dispatch(setIsFollowingAC(id, false))
    })
}