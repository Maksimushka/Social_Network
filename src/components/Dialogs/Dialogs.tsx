import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';
import {MapDispatchToPropsType, mapStateToPropsType} from './DialogsContainer';
import {Field, reduxForm} from 'redux-form';
import {maxLengthCreator, requiredField} from '../../common/validators/validators';
import {Textarea} from '../common/formsControls/FormsControls';

type DialogsPropsType = mapStateToPropsType & MapDispatchToPropsType

const maxLength60 = maxLengthCreator(60)

const DialogsForm: React.FC = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
             <Field name={'messageField'} placeholder="Enter your message"
                    validate={[requiredField, maxLength60]}
                 component={Textarea} />
            <button className={s.butt}>Send</button>
        </form>
    )
}

const ReduxDialogsForm = reduxForm({form: 'dialogs'})(DialogsForm)

const Dialogs = React.memo((props: DialogsPropsType) =>  {
    const addMessage = (value: any) => {
        props.addMessageAC(value.messageField)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogs__items}>
                {
                    props.dialogs.map( d => <DialogItem key={d.id} name={d.name} id={d.id} /> )
                }
            </div>
            <div className={s.messages}>
                {
                    props.messages.map( m => <MessageItem key={m.id} id={m.id} message={m.message} /> )
                }
                <ReduxDialogsForm onSubmit={addMessage} />
            </div>
        </div>
    );
})

export default Dialogs;