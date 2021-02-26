import React from 'react'
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC, setIsFetchingAC,
    setUsersAC,
    setUsersCountAC,
    unFollowAC,
    UserReducerType
} from '../../Redux/users-reducer';
import {RootStateReduxType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {ActionsTypes} from "../../Redux/state";
import axios from 'axios';
import Users from './Users.';
import loading from './../../assets/svg-loaders/three-dots.svg'
import s from './Users.module.css'
import {Preloader} from '../common/Preloader/Preloader';

type MapStateToPropsType = {
    users: UserReducerType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UserReducerType[]) => void
    setCurrentPage: (currentPage: number) => void
    setUsersCount: (usersCount: number) => void
    setIsFetching: (isFetching: boolean) => void
}
type UsersAPIPropsType = {
    users: UserReducerType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    setUsers: (users: UserReducerType[]) => void
    setCurrentPage: (currentPage: number) => void
    setUsersCount: (usersCount: number) => void
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    isFetching: boolean
    setIsFetching: (isFetching: boolean) => void
}

class UsersAPIComponent extends React.Component<UsersAPIPropsType, any> {

    getState = () => {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
                this.props.setIsFetching(false)
                this.props.setUsers(response.data.items)
                this.props.setUsersCount(response.data.totalCount)
            })
    }
    componentDidMount() {
        this.props.setIsFetching(true)
        this.getState()
    }
    onChangePage = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.data.items)
        })
    }

    render() {
        return (
            <>
                { this.props.isFetching

                    ? <Preloader />
                    : <Users
                        currentPage={this.props.currentPage}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        pageSize={this.props.pageSize}
                        users={this.props.users}
                        totalUsersCount={this.props.totalUsersCount}
                        onChangePage={this.onChangePage} />
                }

            </>

        )
    }
}

let mapStateToProps = (state: RootStateReduxType) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
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
        setIsFetching: (isFetching: boolean) => {
            dispatch( setIsFetchingAC(isFetching) )
        },
        setCurrentPage: (currentPage: number) => {
            dispatch( setCurrentPageAC(currentPage) )
        }
    }
}

const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateReduxType>(mapStateToProps, mapDispatchToProps)(UsersAPIComponent)

export default UsersContainer