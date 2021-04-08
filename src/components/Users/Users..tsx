import React, {useCallback} from 'react';
import {Paginator} from '../common/paginator/paginator';
import User from './User';
import {useDispatch, useSelector} from 'react-redux';
import {RootStateReduxType} from '../../Redux/redux-store';
import {UsersReducerType} from '../../Redux/users-page/users-reducer';
import {followAC, setUsers, unFollowAC} from '../../Redux/users-page/users-actions';

const Users: React.FC = React.memo(() => {

    const dispatch = useDispatch()
    const {
        currentPage,
        totalUsersCount,
        pageSize,
        users,
        followingInProgress
    } = useSelector<RootStateReduxType, UsersReducerType>((state) => state.usersPage)
    const onChangePage = useCallback((currentPage: number) => {
        dispatch(setUsers(currentPage, pageSize))
    }, [dispatch, pageSize])
    const follow = useCallback((id: number) => dispatch(followAC(id)), [dispatch])
    const unFollow = useCallback((id: number) => dispatch(unFollowAC(id)), [dispatch])


    return (
        <div>
            <Paginator
                pageSize={pageSize} totalItemsCount={totalUsersCount}
                currentPage={currentPage} onChangePage={onChangePage}/>

            {
                users.map(us => {
                    const onFollowHandler = () => follow(us.id)
                    const onUnFollowHandler = () => unFollow(us.id)

                    return <User
                        key={`${us.id} ${us.name}`}
                        followingInProgress={followingInProgress}
                        onUnFollowHandler={onUnFollowHandler}
                        onFollowHandler={onFollowHandler}
                        us={us} />
                })
            }
        </div>
    )
})

export default Users