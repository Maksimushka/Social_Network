import React, {ChangeEvent, useState} from 'react';
import p from './ProfileInfo.module.scss';
import {userProfileType} from '../../../Redux/profile-page/profile-reducer';
import {Dispatch} from 'redux';
import user from '../../../assets/img/new-user.png'
import ProfileData from './ProfileData/ProfileData';
import ProfileForm from './ProfileForm/ProfileForm';
import {ProfileStatus} from './ProfileData/ProfileStatus';

type ProfileInfoType = {
    profile: userProfileType
    status: string
    isOwner: boolean
    changeUserStatus: (status: string) => (dispatch: Dispatch) => void
    savePhoto: (photo: any) => void
    saveProfileDataTC: (profile: userProfileType) => Promise<any>
}

const ProfileInfo = React.memo(({
                                    saveProfileDataTC,
                                    profile,
                                    status,
                                    changeUserStatus,
                                    isOwner,
                                    savePhoto
                                }: ProfileInfoType) => {
    const [editMode, setEditMode] = useState(false)
    const userPhoto = profile.photos.large || user
    const onChangePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files!.length) {
            savePhoto(e.target.files![0])
        }
    }


    const onSubmit = (formData: userProfileType) => {
        saveProfileDataTC(formData).then(() => {
            setEditMode(false)
        })
    }
    return (
        <div className={p.profileInfo}>
            <div className={p.avaBlock}>
                <img className={p.ava}
                     src={userPhoto}
                     alt=""
                />
                {isOwner && <input type={'file'} onChange={onChangePhoto}/>}
            </div>

            {
                editMode
                    ? <ProfileForm
                        profile={profile}
                        onSubmit={onSubmit}
                    />
                    : <ProfileData
                        isOwner={isOwner}
                        activeEditMode={() => setEditMode(true)}
                        profile={profile}/>
            }
            <ProfileStatus changeUserStatus={changeUserStatus} status={status}/>
        </div>
    );
})


export default ProfileInfo;