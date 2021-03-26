import {DialogsType, MessagesType} from '../../Redux/dialogs-page/dialogs-reducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import {RootStateReduxType} from '../../Redux/redux-store';
import {addMessageAC} from '../../Redux/dialogs-page/dialogs-actions';
import AuthRedirect from '../../HOC/AuthRedirect';
import {compose} from 'redux';
import React from 'react';

export type mapStateToPropsType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}
export type MapDispatchToPropsType = {
    addMessageAC: (text: string) => void
}

let mapStateToProps = (state: RootStateReduxType) => ({
    dialogs: state.dialogsPage.dialogs,
    messages: state.dialogsPage.messages,
})

export default compose<React.ComponentType>(
    connect<mapStateToPropsType, MapDispatchToPropsType, {}, RootStateReduxType>(mapStateToProps, {
        addMessageAC
    }),
    AuthRedirect
)(Dialogs)