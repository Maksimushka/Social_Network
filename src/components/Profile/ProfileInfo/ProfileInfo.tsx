import React, {ChangeEvent, useState} from 'react';
import p from './ProfileInfo.module.scss';
import {userProfileType} from '../../../Redux/profile-page/profile-reducer';
import user from '../../../assets/img/new-user.png'
import ProfileData from './ProfileData/ProfileData';
import {useDispatch} from 'react-redux';
import {savePhotoTC, saveProfileDataTC} from '../../../Redux/profile-page/profile-actions';
import ProfileFormWithFormik from './ProfileForm/ProfileFormWithFormik';
import {Col, Row} from 'antd';

type ProfileInfoType = {
    profile: userProfileType
    isOwner: boolean
}

const ProfileInfo = React.memo(({profile, isOwner}: ProfileInfoType) => {
    const dispatch = useDispatch()
    const [editMode, setEditMode] = useState(false)
    const userPhoto = profile.photos!.large || user
    const onChangePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files!.length) {
            dispatch(savePhotoTC(e.target.files![0]))
        }
    }

    const onSubmit = async (formData: userProfileType) => {
        try {
            let data = await dispatch(saveProfileDataTC(formData))
            if (!data) {
                setEditMode(false)
            }
        } catch (e) {
            console.log(e)
        }
    }
    return (
        <Row>
            <Col span={10}>
                <img className={p.ava}
                     src={userPhoto}
                     alt="userPhoto"
                />
                {isOwner && <input type={'file'} onChange={onChangePhoto}/>}
            </Col>
            <Col span={12}>
                {
                    editMode
                        ? <ProfileFormWithFormik profile={profile} onSubmit={onSubmit}/>
                        : <ProfileData
                            isOwner={isOwner}
                            activeEditMode={() => setEditMode(true)}
                            profile={profile}/>
                }
            </Col>
        </Row>
    );
})


export default ProfileInfo;