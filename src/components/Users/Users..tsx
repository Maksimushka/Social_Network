import React, {useCallback, useEffect} from 'react';
import {Paginator} from '../common/paginator/paginator';
import User from './User';
import {useDispatch, useSelector} from 'react-redux';
import {RootStoreType} from '../../Redux/redux-store';
import {UsersReducerType} from '../../Redux/users-page/users-reducer';
import {followAC, getUsers, SearchFilterType, setFilterAC, unFollowAC} from '../../Redux/users-page/users-actions';
import container from './../../common/container.module.css'
import s from './Users.module.scss'
import UsersSearchForm from './UsersSearchForm';
import {Preloader} from '../common/Preloader/Preloader';

const Users: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const {
        currentPage, totalUsersCount,
        pageSize, users, filter,
        isFetching, followingInProgress
    } = useSelector<RootStoreType, UsersReducerType>((state) => state.usersPage)
    useEffect(() => {
        dispatch(getUsers(pageSize, currentPage, filter))
    }, [])

    const onChangePage = useCallback((currentPage: number) => {
        dispatch(getUsers(pageSize, currentPage, filter))
    }, [dispatch, pageSize, filter])
    const follow = (id: number) => dispatch(followAC(id))
    const unFollow = (id: number) => dispatch(unFollowAC(id))
    const onFilterChanged = (filter: SearchFilterType) => {
        dispatch(getUsers(pageSize, 1, filter))
    }

    const usersStyle = `${container.container} ${s.container}`
    return (
        <>
            {isFetching
                ? <Preloader/>
                : <div className={s.usersBlock}>
                    <div className={usersStyle}>
                        <UsersSearchForm filter={filter} onFilterChanged={onFilterChanged}/>
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