import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup'
import {InputUse, MyCheckbox} from '../../../common/formsControls/FormsControls';
import {userProfileType} from '../../../../Redux/profile-page/profile-reducer';
import { Button } from 'antd';

type ProfileFormWithFormikType = {
    profile: userProfileType
    onSubmit: (formData: userProfileType) => void
}

const ProfileFormWithFormik = ({onSubmit, profile}: ProfileFormWithFormikType) => {

    return (
        <Formik
            initialValues={{
                fullName: '' || profile.fullName,
                aboutMe: '' || profile.aboutMe,
                lookingForAJobDescription: '' || profile.lookingForAJobDescription,
                lookingForAJob: profile.lookingForAJob
            }}
            validationSchema= {Yup.object({
                fullName: Yup.string().max(25, 'Must be 25 characters or less').required('Required'),
                aboutMe: Yup.string().max(95, 'Must be 95 characters or less').required('Required'),
                lookingForAJobDescription: Yup.string().max(85, 'Must be 85 characters or less').required('Required'),
            })}
            onSubmit={ (values) => {
                onSubmit(values)
            }}>
            {formik => (
                <form onSubmit={formik.handleSubmit}>
                    <InputUse label='Full name: ' name='fullName' id='fullName' placeholder='Enter your name' />

                    <InputUse label='About me: ' name='aboutMe' id='aboutMe' />

                    <InputUse label='My professional skills: ' name='lookingForAJobDescription' id='lookingForAJobDescription' />

                    <div>
                        <MyCheckbox id='lookingForAJob' name='lookingForAJob' >looking for a job: </MyCheckbox>
                    </div>

                    <Button htmlType='submit'>Submit</Button>
                </form>
            )}
        </Formik>

    );
};

export default ProfileFormWithFormik;