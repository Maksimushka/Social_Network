import React from 'react'
import {connect} from "react-redux";
import {Users} from "./Users";
import {followAC, setUsersAC, unFollowAC, UserReducerType} from "../../Redux/users-reducer";


let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users
    }
}

// setUsers: (users: UserReducerType[]) => void
//     follow: (userID: number) => void
//     unFollow: (userID: number) => void

let mapDispatchToProps = (dispatch: any) => {
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

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer