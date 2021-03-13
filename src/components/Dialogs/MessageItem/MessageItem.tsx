import React from 'react';
import s from './MessageItem.module.css';
import {MessagesType} from '../../../Redux/dialogs-page/dialogs-reducer';

const MessageItem = (props: MessagesType) => {
    return <li className={s.messages__item}>
        <span className={s.name}>{props.id}</span>
        <span className={s.message}>{props.message}</span>
    </li>
}

export default MessageItem;