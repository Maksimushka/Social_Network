import {ActionTypes, UsersType} from './users-reducer';
import {usersAPI} from '../../api/api';
import {Dispatch} from 'redux';

// TYPES
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

// ACTION CREATORS
export const followAC = (userId: number): FollowACType => ({
    type: ActionTypes.FOLLOW,
    userId
})
export const unFollowAC = (userId: number): unFollowACType => ({
    type: ActionTypes.UNFOLLOW,
    userId
})
export const setUsersAC = (users: UsersType[]): setUsersACType => ({
    type: ActionTypes.SET_USERS,
    users: users
})
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

// THUNK CREATORS
export const getUsers = (page: number, currentPage: number) => async (dispatch: Dispatch) => {
    dispatch(setIsFetchingAC(true))
    dispatch(setCurrentPageAC(page))
    let resp = await usersAPI.getUsers(page, currentPage)
    dispatch(setIsFetchingAC(false))
    dispatch(setUsersAC(resp.items))
    dispatch(setUsersCountAC(resp.totalCount))

}
export const setUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(setCurrentPageAC(currentPage))
    dispatch(setIsFetchingAC(true))
    let resp = await usersAPI.changePage(currentPage, pageSize)
    dispatch(setIsFetchingAC(false))
    dispatch(setUsersAC(resp.items))

}
export const follow = (id: number) => async (dispatch: Dispatch) => {
    dispatch(setIsFollowingAC(id, true))
    let resp = await usersAPI.follow(id)
    if (resp.resultCode === 0) dispatch(followAC(id))
    dispatch(setIsFollowingAC(id, false))
}
export const unFollow = (id: number) => async (dispatch: Dispatch) => {
    dispatch(setIsFollowingAC(id, true))
    let resp = await usersAPI.unFollow(id)
    if (resp.resultCode === 0) dispatch(unFollowAC(id))
    dispatch(setIsFollowingAC(id, false))
}