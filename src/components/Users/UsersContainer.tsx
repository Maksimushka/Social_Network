import React from 'react'
import {connect} from "react-redux";
import {
    followAC,
    setCurrentPageAC,
    setIsFetchingAC,
    setIsFollowingAC,
    setUsersAC,
    setUsersCountAC,
    unFollowAC,
    UserReducerType
} from '../../Redux/users-reducer';
import {RootStateReduxType} from "../../Redux/redux-store";
import Users from './Users.';
import {Preloader} from '../common/Preloader/Preloader';
import {usersAPI} from '../../api/api';

type MapStateToPropsType = {
    users: UserReducerType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: [] | number[]
}
type MapDispatchToPropsType = {
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    setUsers: (users: UserReducerType[]) => void
    setCurrentPage: (currentPage: number) => void
    setUsersCount: (usersCount: number) => void
    setIsFetching: (isFetching: boolean) => void
    setIsFollowing: (userId: number, isLoading: boolean) => void
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
    followingInProgress: [] | number[]
    setIsFetching: (isFetching: boolean) => void
    setIsFollowing: (userId: number, isLoading: boolean) => void
}


class UsersAPIComponent extends React.Component<UsersAPIPropsType, any> {
    componentDidMount() {
        this.props.setIsFetching(true)
        usersAPI.getUsers(this.props.pageSize, this.props.currentPage).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.items)
            this.props.setUsersCount(response.totalCount)
        })
    }
    onChangePage = (currentPage: number) => {
        this.props.setCurrentPage(currentPage)
        this.props.setIsFetching(true)
        usersAPI.changePage(currentPage, this.props.pageSize).then(response => {
            this.props.setIsFetching(false)
            this.props.setUsers(response.items)
        })
    }

    render() {
        return (
            <>
                { this.props.isFetching

                    ? <Preloader />
                    : <Users
                        setIsFollowing={this.props.setIsFollowing}
                        followingInProgress={this.props.followingInProgress}
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

let mapStateToProps = ({usersPage}: RootStateReduxType): MapStateToPropsType => {
    return {
        users: usersPage.users,
        pageSize: usersPage.pageSize,
        totalUsersCount: usersPage.totalUsersCount,
        currentPage: usersPage.currentPage,
        isFetching: usersPage.isFetching,
        followingInProgress: usersPage.followingInProgress
    }
}

const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateReduxType>
(mapStateToProps, {
    follow: followAC,
    unFollow: unFollowAC,
    setUsers: setUsersAC,
    setUsersCount: setUsersCountAC,
    setIsFetching: setIsFetchingAC,
    setCurrentPage: setCurrentPageAC,
    setIsFollowing: setIsFollowingAC
})(UsersAPIComponent)

export default UsersContainer