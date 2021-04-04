import React from 'react';
import s from './Users.module.css';
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

};

export default User;