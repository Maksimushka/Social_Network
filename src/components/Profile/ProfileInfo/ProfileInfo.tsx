import React from 'react';
import p from './ProfileInfo.module.scss';
import {Preloader} from '../../common/Preloader/Preloader';
import {ProfileStatus} from './ProfileStatus';
import {userProfileType} from '../../../Redux/profile-page/profile-reducer';
import {Dispatch} from 'redux';

type ProfileInfoType = {
    profile: userProfileType
    status: string
    changeUserStatus: (status: string) => (dispatch: Dispatch) => void
}

const ProfileInfo = ({profile, status, changeUserStatus}: ProfileInfoType) => {
        if (!profile) {
            return <Preloader />
        }
        return (
            <div className={p.profileInfo}>
                <div className={p.avaBlock}>
                    <img className={p.ava}
                         src={profile.photos.large}
                         alt=''/>
                </div>
                <div className={p.description}>
                    <div className={p.name}>
                        <div>{profile.fullName}</div>
                        <ProfileStatus changeUserStatus={changeUserStatus} status={status} />
                    </div>
                    <div>About me: {profile.aboutMe}</div>
                    <div>looking for a job: {profile.lookingForAJobDescription}</div>
                    <div className={p.contacts}>
                        <h2>My contacts: </h2> <br/>
                        <a href={profile.contacts.facebook}>Facebook</a>
                        <a href={profile.contacts.github}>GitHub</a>
                        <a href={profile.contacts.vk}>VK</a>
                    </div>
                </div>
            </div>
        );
}



export default ProfileInfo;