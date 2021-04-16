import {RootStoreType} from '../Redux/redux-store';

export const getUsersSelector = (state: RootStoreType) => {
    return state.usersPage.users
}

export const getTotalUsersCountSelector = (state: RootStoreType) => {
    return state.usersPage.totalUsersCount
}

export const getPageSizeSelector = (state: RootStoreType) => {
    return state.usersPage.pageSize
}

export const getFollowingSelector = (state: RootStoreType) => {
    return state.usersPage.followingInProgress
}

export const getIsFetchingSelector = (state: RootStoreType) => {
    return state.usersPage.isFetching
}

export const getCurrentPageSelector = (state: RootStoreType) => {
    return state.usersPage.currentPage
}
