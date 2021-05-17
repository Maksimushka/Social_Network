import React, {useCallback, useEffect} from 'react';
import {Paginator} from '../common/paginator/paginator';
import User from './User';
import {useDispatch, useSelector} from 'react-redux';
import {RootStoreType} from '../../Redux/redux-store';
import {UsersReducerType} from '../../Redux/users-page/users-reducer';
import {followAC, getUsers, setUsers, unFollowAC} from '../../Redux/users-page/users-actions';
import container from './../../common/container.module.css'
import s from './Users.module.scss'
import UsersSearchForm from './UsersSearchForm';
import {Preloader} from '../common/Preloader/Preloader';

const Users: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const {
        currentPage,
        totalUsersCount,
        pageSize,
        users,
        isFetching,
        followingInProgress
    } = useSelector<RootStoreType, UsersReducerType>((state) => state.usersPage)
    const onChangePage = useCallback((currentPage: number) => {
        dispatch(setUsers(currentPage, pageSize))
    }, [dispatch, pageSize])

    useEffect(() => {
        dispatch(getUsers(pageSize, currentPage))
    }, [])

    const follow = useCallback((id: number) => dispatch(followAC(id)), [dispatch])
    const unFollow = useCallback((id: number) => dispatch(unFollowAC(id)), [dispatch])

    const usersStyle = `${container.container} ${s.container}`
    return (
        <>
            {isFetching
                ? <Preloader/>
                : <div className={s.usersBlock}>
                    <div className={usersStyle}>
                        <UsersSearchForm/>
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
                                    us={us}/>
                            })
                        }
                    </div>
                </div>
            }
        </>
    )
})

export default Users