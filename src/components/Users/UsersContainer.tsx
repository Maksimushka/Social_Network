import React from 'react'
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unFollowAC, UserReducerType} from "../../Redux/users-reducer";
import {RootStateReduxType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {ActionsTypes} from "../../Redux/state";

type MapStateToPropsType = {
    users: UserReducerType[]
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UserReducerType[]) => void
}

let mapStateToProps = (state: RootStateReduxType) => {
    return {
        users: state.usersPage.users
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
        }
    }
}

const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateReduxType>(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer