import React from 'react';
import p from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div className={p.profile}>
            <div>
                <img className={p.image}
                     src='https://northlands.ru/data/media/14/50930ef9c06c1b4f1a3619eaf0b56a96.jpg'
                     alt=''/>
            </div>
            <div className={p.description}>

            </div>
        </div>
    );
}

export default ProfileInfo;