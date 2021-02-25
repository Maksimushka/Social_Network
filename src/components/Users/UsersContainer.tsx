import React from 'react'
import {connect} from "react-redux";
import Users from "./Users";
import {
    followAC,
    setCurrentPageAC,
    setUsersAC,
    setUsersCountAC,
    unFollowAC,
    UserReducerType
} from '../../Redux/users-reducer';
import {RootStateReduxType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {ActionsTypes} from "../../Redux/state";

type MapStateToPropsType = {
    users: UserReducerType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UserReducerType[]) => void
    setCurrentPage: (currentPage: number) => void
    setUsersCount: (usersCount: number) => void
}

let mapStateToProps = (state: RootStateReduxType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
    }
}

let mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>) => {
    return {
        follow: (userID: number) => {
            dispatch( followAC(userID) )
        },
        unFollow: (userID: number) => {
            dispatch( unFollowAC(userID) )
        },
        setUsers: (users: UserReducerType[]) => {
            dispatch( setUsersAC(users) )
        },
        setUsersCount: (usersCount: number) => {
            dispatch( setUsersCountAC(usersCount) )
        },
        setCurrentPage: (currentPage: number) => {
            dispatch( setCurrentPageAC(currentPage) )
        }
    }
}

const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateReduxType>(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer