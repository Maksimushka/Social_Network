import React from 'react';
import {addMessageAC, updateNewMessageText} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreType} from "../../Redux/state";

import {connect} from "react-redux";

type DialogsContainerPropsType = {
    store: StoreType
}



let mapStateToProps = (state: any) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages,
        newMessageText: state.dialogsPage.newMessageText
    }
}

let mapDispatchToProps = (dispatch: any) => {
    return {
        changeTextMessage: (text: string) => {
            dispatch( updateNewMessageText(text) )
        },
        addMessage: () => {
            dispatch( addMessageAC() )
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;