import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = (props: any) => {
    return (
        <header className={s.header}>
            <div className={s.header_top}>
                <NavLink to='/profile' className={s.a}>
                    <img className={s.header__image}  src='https://www.amic.ru/project/all/architecture-barnaul/images/tild3630-6134-4437-b138-623638326363__medicallogopng32.jpeg' alt='logo' />
                </NavLink>
                <div className={s.loginBlock}>
                    {props.isAuth
                        ? <div className={s.user}>
                            <img className={s.userPhoto} src={props.photo} alt="userPhoto"/>
                            <span className={s.userLogin}>{props.login}</span>
                        </div>
                        : <NavLink to={'/login'}>Login</NavLink>
                    }

                </div>
            </div>
        </header>
    )
}

export default Header;