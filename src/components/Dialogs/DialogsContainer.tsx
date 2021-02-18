import React from 'react';
import {addMessageAC, updateNewMessageText} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {ActionsTypes, DialogsType, MessagesType} from "../../Redux/state";

import {connect} from "react-redux";
import {RootStateReduxType} from "../../Redux/redux-store";
import { Dispatch } from 'redux';


type mapStateToPropsType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
type MapDispatchToPropsType = {
    changeTextMessage: (text: string) => void
    addMessage: () => void
}


let mapStateToProps = (state: RootStateReduxType) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}
let mapDispatchToProps = (dispatch: Dispatch<ActionsTypes>) => {
    return {
        changeTextMessage: (text: string) => {
            dispatch( updateNewMessageText(text) )
        },
        addMessage: () => {
            dispatch( addMessageAC() )
        }
    }
}

const DialogsContainer = connect< mapStateToPropsType, MapDispatchToPropsType, {}, RootStateReduxType>(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;