import React from 'react';
import s from './Header.module.scss';
import styleContainer from './../../common/container.module.css'
import userPhoto from '../../assets/img/user.png';
import {NavLink} from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const Header = (props: any) => {
    return (
        <header className={s.header}>
            <div className={styleContainer.container}>
                <div className={s.image}>
                    <NavLink to='/profile' className={s.a}>
                        <img src='https://www.amic.ru/project/all/architecture-barnaul/images/tild3630-6134-4437-b138-623638326363__medicallogopng32.jpeg'
                             alt='logo'/>
                    </NavLink>
                </div>
                <NavBar />
                <div className={s.user}>
                    {props.isAuth
                        ? <>
                            <div className={s.isAuth}>
                                <NavLink to={`/profile`}>
                                    <span className={s.userLogin}>{props.login}</span>
                                </NavLink>
                                <button className={s.button} onClick={props.setLogout}>Log out</button>
                            </div>
                            <img className={s.userPhoto} src={props.photo !== null ? props.photo : userPhoto}
                                 alt="userPhoto"/>
                        </>
                        : <NavLink className={s.button} to={'/login'}>
                            <span>Login</span>
                            </NavLink>
                    }
                </div>
            </div>
        </header>
    )
}

export default Header;