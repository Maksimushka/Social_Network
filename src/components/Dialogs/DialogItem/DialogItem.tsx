import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";
import {DialogsType} from "../../../Redux/state";

const DialogItem = (props: DialogsType) => {
    let path = '/dialogs/' + props.id
    return (
            <NavLink to={ path } activeClassName={s.active} >
                <div className={s.dialog}>
                    <span>{ props.name }</span>
                </div>
            </NavLink>
    )
}

export default DialogItem;