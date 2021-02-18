import React from 'react';
import s from './NavBar.module.css';
import {NavLink} from "react-router-dom";

const NavBar = () => {
    return (
        <nav className={s.nav}>
            <ul className={s.list}>
                <NavLink to='/profile' activeClassName={s.active}>
                    <li className={s.item}>Profile</li>
                </NavLink>
                <NavLink to='/dialogs' activeClassName={s.active}>
                    <li className={s.item}>Messages</li>
                </NavLink>
                <NavLink to='/news' activeClassName={s.active}>
                    <li className={s.item}>News</li>
                </NavLink>
                <NavLink to='/users' activeClassName={s.active}>
                    <li className={s.item}>Users</li>
                </NavLink>
                <NavLink to='/music' activeClassName={s.active}>
                    <li className={s.item}>Music</li>
                </NavLink>
                <NavLink to='/settings' activeClassName={s.active}>
                    <li className={s.item}>Settings</li>
                </NavLink>
            </ul>
        </nav>
    )
}

export default NavBar;
