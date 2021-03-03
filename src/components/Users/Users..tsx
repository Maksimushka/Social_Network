import React from 'react';
import s from './Users.module.css';
import userPhoto from '../../assets/img/user.png';
import {UserReducerType} from '../../Redux/users-reducer';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

type UsersPropsType = {
    users: UserReducerType[]
    totalUsersCount: number
    pageSize: number
    currentPage: number
    follow: (userID: number) => void
    unFollow: (userID: number) => void
    onChangePage: (currentPage: number) => void
}

let Users = (props: UsersPropsType) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
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
                        onClick={() => props.onChangePage(p)}
                        className={props.currentPage === p ? s.selectedPage : ''}>{p}</span>
                })}
            </div>
            {
                props.users.map(us => {
                    let onFollowHandler = () => {
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${us.id}`, {}, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '0c7f7a4d-ffbe-4143-a04f-3a08c1c80984'
                            }
                        }).then(response => {
                            if (response.data.resultCode === 0) {
                                props.follow(us.id)
                            }
                        })
                    }
                    let onUnFollowHandler = () => {
                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${us.id}`, {
                            withCredentials: true,
                            headers: {
                                'API-KEY': '0c7f7a4d-ffbe-4143-a04f-3a08c1c80984'
                            }
                        }).then(response => {
                            if (response.data.resultCode === 0) {
                                props.unFollow(us.id)
                            }
                        })
                    }

                    return (<div className={s.user} key={us.id}>
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
                                        onClick={onUnFollowHandler}>Unfollow</button>
                                    : <button
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