import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {DialogsType, MessagesType} from "../../Redux/state";

type DialogsPropsType = {
    changeTextMessage: (text: string) => void
    addMessage: () => void
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}

const Dialogs = (props: DialogsPropsType) =>  {

    let addMessage = () => {
        props.addMessage()
    }
    let changeTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.changeTextMessage(e.currentTarget.value)
    }

    let dialogsElement = props.dialogs.map( d => <DialogItem name={d.name} id={d.id} /> )
    let messageElement = props.messages.map( m => <MessageItem id={m.id} message={m.message} /> )

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                { dialogsElement }
            </div>
            <div className={s.messages}>
                { messageElement }
                <div className={s.input}>
                <textarea value={ props.newMessageText }
                          placeholder="Enter your message"
                          onChange={ changeTextMessage }
                          className={s.text}/>
                    <button onClick={ addMessage } className={s.butt}>Send</button>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;