import React from 'react'
import {connect} from 'react-redux';
import {UsersType} from '../../Redux/users-page/users-reducer';
import {RootStateReduxType} from '../../Redux/redux-store';
import Users from './Users.';
import {Preloader} from '../common/Preloader/Preloader';
import {follow, getUsers, setUsers, unFollow} from '../../Redux/users-page/users-actions';
import {
    getCurrentPageSelector, getFollowingSelector, getIsFetchingSelector,
    getPageSizeSelector,
    getTotalUsersCountSelector,
    getUsersSelector
} from '../../selectors/users-selectors';

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
type UsersAPIPropsType = MapDispatchToPropsType & MapStateToPropsType

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

const mapStateToProps = (state: RootStateReduxType): MapStateToPropsType => ({
    users: getUsersSelector(state),
    pageSize: getPageSizeSelector(state),
    totalUsersCount: getTotalUsersCountSelector(state),
    currentPage: getCurrentPageSelector(state),
    isFetching: getIsFetchingSelector(state),
    followingInProgress: getFollowingSelector(state)
})

const UsersContainer = connect<MapStateToPropsType, MapDispatchToPropsType, {}, RootStateReduxType>
(mapStateToProps, {
    getUsers,
    setUsers,
    follow,
    unFollow
})(UsersAPIComponent)

export default UsersContainer