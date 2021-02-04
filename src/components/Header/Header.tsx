import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => { 
    return (
        <header className={s.header}>
            <div className={s.header_top}>
                <NavLink to='/profile' className={s.a}>
                    <img className={s.header__image}  src='https://www.amic.ru/project/all/architecture-barnaul/images/tild3630-6134-4437-b138-623638326363__medicallogopng32.jpeg' alt='logo' />
                </NavLink>
            </div>
        </header>
    )
}

export default Header;