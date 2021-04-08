import React, {useEffect} from 'react'
import {UsersReducerType} from '../../Redux/users-page/users-reducer';
import {RootStateReduxType} from '../../Redux/redux-store';
import Users from './Users.';
import {Preloader} from '../common/Preloader/Preloader';
import {useDispatch, useSelector} from 'react-redux';
import {getUsers} from '../../Redux/users-page/users-actions';

export const UsersContainer = () => {
    const {isFetching, pageSize, currentPage} = useSelector<RootStateReduxType, UsersReducerType>((state) => state.usersPage)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getUsers(pageSize, currentPage))
    }, [])

    return (
        <>
            {isFetching ? <Preloader/> : null}
            <Users />
        </>

    )
}

export default UsersContainer