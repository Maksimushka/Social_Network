import React from 'react';
import p from '../ProfileInfo.module.scss';
import {userProfileType} from '../../../../Redux/profile-page/profile-reducer';

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
            </div>
            { isOwner && <button onClick={activeEditMode}>Edit</button>}
            <div>About me: {profile.aboutMe}</div>
            <div>
                <div>looking for a job: {profile.lookingForAJob ? 'yes' : 'no'}</div>
                {
                    profile.lookingForAJob &&
                    <div>looking for a job: {profile.lookingForAJobDescription}</div>
                }
            </div>
        </div>
    );
};

export default ProfileData;