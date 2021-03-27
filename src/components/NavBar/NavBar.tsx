import React from 'react';
import s from './NavBar.module.scss';
import {NavLink} from 'react-router-dom';

const NavBar = () => {
    return (
        <ul className={s.list}>
            <NavLink exact to='/profile' activeClassName={s.active}>
                <li>Profile</li>
            </NavLink>
            <NavLink exact to='/dialogs' activeClassName={s.active}>
                <li>Messages</li>
            </NavLink>
            <NavLink exact to='/users' activeClassName={s.active}>
                <li>Users</li>
            </NavLink>
            <NavLink exact to='/settings' activeClassName={s.active}>
                <li>Settings</li>
            </NavLink>
        </ul>

    )
}

export default NavBar;
