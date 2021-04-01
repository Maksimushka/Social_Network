import React from 'react';
import p from './ProfileInfo.module.scss';
import {ProfileStatus} from './ProfileStatus';
import {userProfileType} from '../../../Redux/profile-page/profile-reducer';
import {Dispatch} from 'redux';

type ProfileInfoType = {
    profile: userProfileType
    status: string
    changeUserStatus: (status: string) => (dispatch: Dispatch) => void
}

const ProfileInfo = React.memo(({profile, status, changeUserStatus}: ProfileInfoType) => {
        return (
            <div className={p.profileInfo}>
                <div className={p.avaBlock}>
                    <img className={p.ava}
                         src={profile.photos.large}
                         alt=''
                    />
                    <button>Change avatar</button>
                </div>
                <div className={p.description}>
                    <div className={p.name}>
                        <h2>{profile.fullName}</h2>
                        <ProfileStatus changeUserStatus={changeUserStatus} status={status} />
                    </div>
                    <div>About me: {profile.aboutMe}</div>
                    <div>looking for a job: {profile.lookingForAJobDescription}</div>
                    <h2>My contacts: </h2>
                    <div className={p.contacts}>
                        <a href={profile.contacts.facebook}>Facebook</a>
                        <a href={profile.contacts.github}>GitHub</a>
                        <a href={profile.contacts.vk}>VK</a>
                    </div>
                </div>
            </div>
        );
})



export default ProfileInfo;