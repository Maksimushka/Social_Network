import React, {useCallback, useEffect} from 'react';
import {Paginator} from '../common/paginator/paginator';
import User from './User';
import {useDispatch, useSelector} from 'react-redux';
import {RootStoreType} from '../../Redux/redux-store';
import {UsersReducerType} from '../../Redux/users-page/users-reducer';
import {followAC, getUsers, SearchFilterType, unFollowAC} from '../../Redux/users-page/users-actions';
import container from './../../common/container.module.css'
import s from './Users.module.scss'
import UsersSearchForm from './UsersSearchForm';
import {Preloader} from '../common/Preloader/Preloader';
import {useHistory} from 'react-router';
import * as queryString from 'querystring';

type QueryParamsType = {term?: string; page?: string; friend?: string}

const Users: React.FC = React.memo(() => {
    const dispatch = useDispatch()
    const history = useHistory()
    const {
        currentPage, totalUsersCount,
        pageSize, users, filter,
        isFetching, followingInProgress
    } = useSelector<RootStoreType, UsersReducerType>((state) => state.usersPage)

    useEffect(() => {
        const parsed = queryString.parse(history.location.search.substr(1)) as QueryParamsType;
        console.log(parsed)

        let actualPage = currentPage
        let actualFilter = filter
        if (!!parsed.page) {
            actualPage = +parsed.page
        }
        if (!!parsed.term) {
            actualFilter = {...actualFilter, term: parsed.term as string}
        }
        if (!!parsed.friend) {
            actualFilter = {...actualFilter, friend: parsed.friend === 'null' ? null : parsed.friend === 'true'}
        }

        dispatch(getUsers(pageSize, actualPage, actualFilter))
    }, [])

    useEffect(() => {
        const query: QueryParamsType = {}
        if (!!filter.term) {
            query.term = filter.term
        }
        if (filter.friend !== null) {
            query.friend = String(filter.friend)
        }
        if (currentPage !== 1) {
            query.page = String(currentPage)
        }

        history.push({
            pathname: '/users',
            search: queryString.stringify(query)
        })
    }, [filter, history, currentPage])

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
                        <UsersSearchForm onFilterChanged={onFilterChanged}/>
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