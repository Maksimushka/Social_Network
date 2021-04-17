import React, {ChangeEvent,KeyboardEvent,  useEffect, useState} from 'react';
import s from '../ProfileInfo.module.scss'
import {useDispatch, useSelector} from 'react-redux';
import {RootStoreType} from '../../../../Redux/redux-store';
import {changeUserStatusTC} from '../../../../Redux/profile-page/profile-actions';

export const ProfileStatus = () => {
    const dispatch = useDispatch()
    const { status } = useSelector((state: RootStoreType) => state.profilePage)

    const [curStatus, setCurStatus] = useState(status)
    const [editMode, setEditMode] = useState<boolean>( false)

    const activateEditMode = () => setEditMode(true)
    const deActivateEditMode = () => {
        setEditMode(false)
        dispatch(changeUserStatusTC(curStatus))
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        e.charCode === 13 && deActivateEditMode()
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCurStatus(e.currentTarget.value)
    }

    useEffect(() => {
        setCurStatus(status)
    }, [status])

    return (
        <>
            {
                editMode
                    ? <input onKeyPress={ onKeyPressHandler } value={curStatus} onChange={ onStatusChange }
                             autoFocus onBlur={ deActivateEditMode }
                             className={s.editableInput} type="text"/>
                    : <span onDoubleClick={ activateEditMode }
                            className={s.editableSpan}>{ curStatus || '-------'}</span>
            }
        </>
    )
}