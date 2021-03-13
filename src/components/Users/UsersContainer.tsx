import React from 'react'
import {connect} from 'react-redux';
import {UsersType} from '../../Redux/users-page/users-reducer';
import {RootStateReduxType} from '../../Redux/redux-store';
import Users from './Users.';
import {Preloader} from '../common/Preloader/Preloader';
import {follow, getUsers, setUsers, unFollow} from '../../Redux/users-page/users-actions';

type MapStateToPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: [] | number[]
}
type MapDispatchToPropsType = {
    getUsers: (pageSize: number, currentPage: number) => void
    setUsers: (currentPage: number, pageSize: number) => void
    follow: (id: number) => void
    unFollow: (id: number) => void
}
type UsersAPIPropsType = {
    users: UsersType[]
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    followingInProgress: [] | number[]
    getUsers: (pageSize: number, currentPage: number) => void
    setUsers: (currentPage: number, pageSize: number) => void
    follow: (id: number) => void
    unFollow: (id: number) => void
}

class UsersAPIComponent extends React.Component<UsersAPIPropsType, any> {

    componentDidMount() {
        this.props.getUsers(this.props.pageSize, this.props.currentPage)
    }
    onChangePage = (currentPage: number) => {
        this.props.setUsers(currentPage, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching

                    ? <Preloader/>
                    : <Users
                        followingInProgress={this.props.followingInProgress}
                        currentPage={this.props.currentPage}
                        pageSize={this.props.pageSize}
                        users={this.props.users}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow}
                        totalUsersCount={this.props.totalUsersCount}
                        onChangePage={this.onChangePage}/>
                }

            </>

        )
    }
}

const mapStateToProps = ({usersPage}: RootStateReduxType): MapStateToPropsType => {
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
    getUsers,
    setUsers,
    follow,
    unFollow
})(UsersAPIComponent)

export default UsersContainer