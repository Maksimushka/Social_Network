import React from 'react';
import s from './Users.module.scss';
import {NavLink} from 'react-router-dom';
import userPhoto from '../../assets/img/user.png';
import {UsersType} from '../../Redux/users-page/users-reducer';


type UserPropsType = {
    us: UsersType
    onFollowHandler: () => void
    onUnFollowHandler: () => void
    followingInProgress: [] | number[]
}

const User = (props: UserPropsType) => {
    const {us, onUnFollowHandler, onFollowHandler, followingInProgress} = props
    return (
        <div className={s.user} key={us.id}>
            <div className={s.userIconBlock}>
                <NavLink to={`/profile/${us.id}`}>
                    <img
                        className={s.photo}
                        src={us.photos.small! !== null ? us.photos.small! : userPhoto} alt="dsg"/>
                </NavLink>
                {us.followed
                    ? <button
                        disabled={followingInProgress.some(el => el === us.id)}
                        onClick={onUnFollowHandler}>Unfollow</button>
                    : <button
                        disabled={followingInProgress.some(el => el === us.id)}
                        onClick={onFollowHandler}>Follow</button>}
            </div>
            <div className={s.userDescriptionBlock}>
                <div className={s.userDescriptionInfo}>
                    <span>{us.name}</span>
                    <span>{us.status}</span>
                </div>
            </div>
        </div>)

};

export default User;