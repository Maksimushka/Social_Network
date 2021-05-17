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
export type setFilterACType = {
    type: ActionTypes.SET_FILTER
    payload: {term: string, friend: null | boolean}
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
export type SearchFilterType = {
    term: string,
    friend: null | boolean
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
export const setFilterAC = (filter: SearchFilterType): setFilterACType => ({
    type: ActionTypes.SET_FILTER,
    payload: filter
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
export const getUsers = (page: number, currentPage: number, filter: SearchFilterType) => async (dispatch: Dispatch) => {
    dispatch(setIsFetchingAC(true))
    let resp = await usersAPI.getUsers(page, currentPage, filter)
    dispatch(setCurrentPageAC(currentPage))
    dispatch(setFilterAC(filter))
    dispatch(setUsersAC(resp.items))
    dispatch(setUsersCountAC(resp.totalCount))
    dispatch(setIsFetchingAC(false))
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