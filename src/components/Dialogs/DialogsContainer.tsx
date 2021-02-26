import React from 'react';
import {addMessageAC, updateNewMessageText} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {DialogsType, MessagesType} from "../../Redux/state";
import {connect} from "react-redux";
import {RootStateReduxType} from "../../Redux/redux-store";


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

const DialogsContainer = connect< mapStateToPropsType, MapDispatchToPropsType, {}, RootStateReduxType>(mapStateToProps, {
    changeTextMessage: updateNewMessageText,
    addMessage: addMessageAC
})(Dialogs)

export default DialogsContainer;