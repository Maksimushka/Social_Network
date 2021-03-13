import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/img/user.png';
import {NavLink} from 'react-router-dom';
import {UsersType} from '../../Redux/users-page/users-reducer';

type UsersPropsType = {
    users: UsersType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    onChangePage: (currentPage: number) => void
    followingInProgress: [] | number[]
    follow: (id: number) => void
    unFollow: (id: number) => void
}

let Users = (props: UsersPropsType) => {
    const {
        users,
        totalUsersCount,
        pageSize,
        currentPage,
        onChangePage,
        followingInProgress,
        follow,
        unFollow
    } = props


    let pagesCount = Math.ceil(totalUsersCount / pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }
    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span
                        key={p}
                        onClick={() => onChangePage(p)}
                        className={currentPage === p ? s.selectedPage : ''}>{p}</span>
                })}
            </div>
            {
                users.map(us => {
                    const onFollowHandler = () => {
                        follow(us.id)
                    }
                    const onUnFollowHandler = () => {
                        unFollow(us.id)
                    }

                    return (
                        <div className={s.user} key={us.id}>
                            <div className={s.userIcon}>
                                <div>
                                    <NavLink to={`/profile/${us.id}`}>
                                        <img
                                            className={s.photo}
                                            src={us.photos.small! !== null ? us.photos.small! : userPhoto} alt="dsg"/>
                                    </NavLink>
                                </div>
                                <div>
                                    {us.followed
                                        ? <button
                                            disabled={followingInProgress.some(el => el === us.id)}
                                            onClick={onUnFollowHandler}>Unfollow</button>
                                        : <button
                                            disabled={followingInProgress.some(el => el === us.id)}
                                            onClick={onFollowHandler}>Follow</button>}
                                </div>
                            </div>
                            <div className={s.userDescription}>
                                <div className={s.userDescriptionInfo}>
                                    <div>
                                        {us.name}
                                    </div>
                                    <div>
                                        {us.status}
                                    </div>
                                </div>
                                <div className={s.userDescriptionLocation}>
                                    <div>
                                        {'us.location.city'}
                                    </div>
                                    <div>
                                        {'us.location.country'}
                                    </div>
                                </div>
                            </div>
                        </div>)
                })
            }
        </div>
    )
}

export default Users