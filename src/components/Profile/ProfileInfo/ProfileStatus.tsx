import React, {ChangeEvent} from 'react';
import s from './ProfileInfo.module.css'
import {Dispatch} from 'redux';

type ProfileStatusType = {
    status: string
    changeUserStatus: (status: string) => (dispatch: Dispatch) => void
}

export class ProfileStatus extends React.Component<ProfileStatusType, any> {
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
    componentDidUpdate(prevProps: Readonly<ProfileStatusType>, prevState: Readonly<any>) {
        if (this.props.status !== prevProps.status) {
            this.setState({
                status: this.props.status
            })
        }
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
                            className={s.editableSpan}>{this.state.status || '-------'}</span>
                }
            </>
        )
    }
}