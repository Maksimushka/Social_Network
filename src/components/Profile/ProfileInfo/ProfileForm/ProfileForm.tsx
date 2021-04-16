import React from 'react';
import {userProfileType} from '../../../../Redux/profile-page/profile-reducer';
import p from '../ProfileInfo.module.scss';
import {CreateField, Input, Textarea} from '../../../common/formsControls/FormsControls';
import {InjectedFormProps, reduxForm} from 'redux-form';
import s from '../../../Login/Login.module.css';

type PropsType = {
    profile: userProfileType
}

const ProfileForm: React.FC<InjectedFormProps<userProfileType, PropsType> & PropsType> = ({handleSubmit, error, profile}) => {

    return (
        <form onSubmit={handleSubmit} className={p.description}>
            {
                error &&
                <div className={s.formSummaryError}>
                    {error}
                </div>
            }
            <button >Save</button>
            <div className={p.name}>
                <h2>Full Name: {CreateField('Full name', 'fullName', [], Input)}</h2>
            </div>
            <div>About me: {CreateField('About me', 'AboutMe', [], Textarea)}</div>
            <div>My professional skills: {
                CreateField("My professional skills", "lookingForAJobDescription", [], Textarea  )
            }</div>
            <div>
                <div>looking for a job: {CreateField('', 'LookingForAJob', [], Input, 'checkbox')}</div>
            </div>
            <h2>My contacts:</h2>
            {
                Object.keys(profile.contacts).map(el => {
                    return <span key={el}>
                        {el}: {CreateField('', `contacts.${el}`, [], Input)}
                    </span>
                })
            }
        </form>
    );
};

const ProfileReduxForm = reduxForm<userProfileType, PropsType>({form: 'edit-profile'})(ProfileForm)

export default ProfileReduxForm;