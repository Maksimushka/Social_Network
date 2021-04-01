import React, {ChangeEvent,KeyboardEvent,  useEffect, useState} from 'react';
import s from './ProfileInfo.module.scss'
import {Dispatch} from 'redux';

type ProfileStatusType = {
    status: string
    changeUserStatus: (status: string) => (dispatch: Dispatch) => void
}

export const ProfileStatus = (props:ProfileStatusType ) => {

    const [status, setStatus] = useState(props.status)
    const [editMode, setEditMode] = useState<boolean>( false)

    const activateEditMode = () => setEditMode(true)
    const deActivateEditMode = () => {
        setEditMode(false)
        props.changeUserStatus(status)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.charCode === 13 && deActivateEditMode()
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setStatus(props.status)
    }, [props.status])

    return (
        <>
            {
                editMode
                    ? <input onKeyPress={ onKeyPressHandler } value={status} onChange={ onStatusChange }
                             autoFocus onBlur={ deActivateEditMode }
                             className={s.editableInput} type="text"/>
                    : <span onDoubleClick={ activateEditMode }
                            className={s.editableSpan}>{ status || '-------'}</span>
            }
        </>
    )
}