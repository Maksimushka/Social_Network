import React from 'react';
import s from './Header.module.css';
import styleContainer from './../../common/container.module.css'
import userPhoto from '../../assets/img/user.png';
import {NavLink} from 'react-router-dom';

const Header = (props: any) => {
    return (
        <header className={s.header}>
            <div className={styleContainer.container}>
                <NavLink to='/profile' className={s.a}>
                    <img className={s.header__image}
                         src='https://www.amic.ru/project/all/architecture-barnaul/images/tild3630-6134-4437-b138-623638326363__medicallogopng32.jpeg'
                         alt='logo'/>
                </NavLink>
                <div className={s.user}>
                    {props.isAuth
                        ? <>
                            <NavLink to={`/profile/${props.userId}`}>
                                <span className={s.userLogin}>{props.login}</span>
                            </NavLink>
                            <img className={s.userPhoto} src={props.photo !== null ? props.photo : userPhoto}
                                 alt="userPhoto"/>
                        </>
                        : <NavLink to={'/login'}>Login</NavLink>
                    }

                </div>
            </div>
        </header>
    )
}

export default Header;