import s from '../../Users/Users.module.scss';
import loading from '../../../assets/svg-loaders/three-dots.svg';
import React from 'react';
export let Preloader = () => {
    return (
        <div className={s.imgLoad}><img alt='loading' src={loading} /></div>
    )
}
