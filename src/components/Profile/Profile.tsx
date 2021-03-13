import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';
import {userProfileType} from '../../Redux/profile-page/profile-reducer';
export type ProfileType = {
    profile: userProfileType
}

const Profile = ({profile}: ProfileType) => {
    return (
        <div>
            <ProfileInfo profile={profile} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;