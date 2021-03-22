import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import {Dispatch} from 'redux';

type ProfileStatusType = {
    status: string
    changeUserStatus: (status: string) => (dispatch: Dispatch) => void
}

class ProfileStatus extends React.Component<ProfileStatusType, any> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.changeUserStatus(this.state.status)
    }
    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <>
                {
                    this.state.editMode
                    ? <input value={this.state.status} onChange={this.onStatusChange}
                             autoFocus onBlur={ this.deActivateEditMode }
                             className={s.editableInput} type="text"/>
                    : <span onDoubleClick={ this.activateEditMode }
                            className={s.editableSpan}>{this.props.status || '-------'}</span>
                }
            </>
        )
    }
}

export default ProfileStatus