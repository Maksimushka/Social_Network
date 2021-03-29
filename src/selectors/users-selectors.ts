import {RootStateReduxType} from '../Redux/redux-store';

export const getUsersSelector = (state: RootStateReduxType) => {
    return state.usersPage.users
}

export const getTotalUsersCountSelector = (state: RootStateReduxType) => {
    return state.usersPage.totalUsersCount
}

export const getPageSizeSelector = (state: RootStateReduxType) => {
    return state.usersPage.pageSize
}

export const getFollowingSelector = (state: RootStateReduxType) => {
    return state.usersPage.followingInProgress
}

export const getIsFetchingSelector = (state: RootStateReduxType) => {
    return state.usersPage.isFetching
}

export const getCurrentPageSelector = (state: RootStateReduxType) => {
    return state.usersPage.currentPage
}
