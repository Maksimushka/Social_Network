import AuthRedirect from '../../HOC/AuthRedirect';
import {compose} from 'redux';
import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {useDispatch, useSelector} from 'react-redux';
import {RootStoreType} from '../../Redux/redux-store';
import {DialogsReducerType} from '../../Redux/dialogs-page/dialogs-reducer';
import {addMessageAC} from '../../Redux/dialogs-page/dialogs-actions';
import * as Yup from 'yup';
import {InputUse} from '../common/formsControls/FormsControls';
import {Formik} from 'formik';


const Dialogs = React.memo(() =>  {
    const dispatch = useDispatch()
    const {dialogs, messages} = useSelector<RootStoreType, DialogsReducerType>(state => state.dialogsPage)
    const addMessage = (value: string) => {
        dispatch(addMessageAC(value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                { dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} /> ) }
            </div>
            <div className={s.messages}>
                { messages.map( m => <MessageItem key={m.id} id={m.id} message={m.message} /> ) }
                <Formik
                    initialValues={{ messageText: '' }}
                    validationSchema= {Yup.object({
                        messageText: Yup.string().max(100, 'Must be 100 characters or less').required('Required'),
                    })}
                    onSubmit={ (values, action) => {
                        addMessage(values.messageText)
                        action.resetForm()
                    }}>
                    {formik => (
                        <form onSubmit={formik.handleSubmit}>
                            <InputUse className={s.input} name='messageText' id='messageText' placeholder='Enter your message' />
                            <button className={s.butt} type='submit'>Submit</button>
                        </form>
                    )}
                </Formik>
            </div>
        </div>
    );
})

export default compose<React.ComponentType>(
    AuthRedirect
)(Dialogs)