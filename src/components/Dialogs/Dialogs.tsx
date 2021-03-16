import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import MessageItem from "./MessageItem/MessageItem";
import {DialogsType, MessagesType} from '../../Redux/dialogs-page/dialogs-reducer';
import {Redirect} from 'react-router';

type DialogsPropsType = {
    updateNewMessageTextAC: (text: string) => void
    addMessageAC: () => void
    dialogs: DialogsType[]
    messages: MessagesType[]
    newMessageText: string
    isAuth: boolean
}

const Dialogs = (props: DialogsPropsType) =>  {

    if ( !props.isAuth ) return <Redirect to={'/login'}/>

    const addMessage = () => {
        props.addMessageAC()
    }
    const changeTextMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateNewMessageTextAC(e.currentTarget.value)
    }

    const dialogsElement = props.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} /> )
    const messageElement = props.messages.map( m => <MessageItem key={m.id} id={m.id} message={m.message} /> )

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