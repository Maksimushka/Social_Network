import React from 'react';
import p from '../ProfileInfo.module.scss';
import {userProfileType} from '../../../../Redux/profile-page/profile-reducer';
import {ProfileStatus} from './ProfileStatus';
import {Button} from 'antd';

type ProfileDataPropsType = {
    activeEditMode: () => void
    profile: userProfileType
    isOwner: boolean
}

const ProfileData = ({profile, isOwner, activeEditMode}: ProfileDataPropsType) => {
    return (
        <div className={p.description}>
            <div className={p.name}>
                <h2>{profile.fullName}</h2>
                <ProfileStatus/>
            </div>
            { isOwner && <Button onClick={activeEditMode}>Edit</Button>}
            <div><span>About me:</span> {profile.aboutMe}</div>
            <div>
                <div><span>looking for a job:</span> {profile.lookingForAJob ? 'yes' : 'no'}</div>
                {
                    profile.lookingForAJob &&
                    <div><span>looking for a job:</span> {profile.lookingForAJobDescription}</div>
                }
            </div>
        </div>
    );
};

export default ProfileData;