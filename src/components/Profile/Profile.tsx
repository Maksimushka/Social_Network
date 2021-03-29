import React from 'react';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {Preloader} from '../common/Preloader/Preloader';
import s from './Profile.module.scss'
import styleContainer from './../../common/container.module.css'

const Profile = (props: any) => {
    if (!props.profile) {
        return <Preloader/>
    }
    return (
        <div className={styleContainer.container}>
            <ProfileInfo {...props} />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;