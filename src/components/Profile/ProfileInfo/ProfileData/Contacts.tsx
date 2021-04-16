import React from 'react';
import p from '../ProfileInfo.module.scss';
import {userProfileType} from '../../../../Redux/profile-page/profile-reducer';

type ContactsPropsType = {
    profile: userProfileType
}

const Contacts = ({profile}: ContactsPropsType) => {
    return (
        <div className={p.contacts}>
            {
                Object.keys(profile.contacts).map(el => {
                    // @ts-ignore
                    return <a key={el} href={profile.contacts[el]}>{el}</a>
                })
            }
        </div>
    );
};

export default Contacts;