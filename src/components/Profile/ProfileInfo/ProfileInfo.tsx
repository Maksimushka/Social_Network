import React, {ChangeEvent} from 'react';
import p from './ProfileInfo.module.scss';
import {ProfileStatus} from './ProfileStatus';
import {userProfileType} from '../../../Redux/profile-page/profile-reducer';
import {Dispatch} from 'redux';
import user from '../../../assets/img/new-user.png'

type ProfileInfoType = {
    profile: userProfileType
    status: string
    isOwner: boolean
    changeUserStatus: (status: string) => (dispatch: Dispatch) => void
    savePhoto: (photo: any) =>  void
}

const ProfileInfo = React.memo(({profile, status, changeUserStatus, isOwner, savePhoto}: ProfileInfoType) => {
    const userPhoto = profile.photos.large || user
    const onChangePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files!.length) {
            savePhoto(e.target.files![0])
        }
    }
        return (
            <div className={p.profileInfo}>
                <div className={p.avaBlock}>
                    <img className={p.ava}
                         src={userPhoto}
                         alt=''
                    />
                    {isOwner && <input type={'file'} onChange={onChangePhoto}/>}
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