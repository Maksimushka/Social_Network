import React from 'react';
import {addMessageAC, updateNewMessageText} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {StoreType} from "../../Redux/state";
import StoreContext from '../../storeContext';

type DialogsContainerPropsType = {
    store: StoreType
}

const DialogsContainer = () =>  {



    return (
        <StoreContext.Consumer>
            {
                (store: StoreType) => {
                    let state = store.getState()

                    let addMessage = () => {
                        store.dispatch( addMessageAC(state.dialogsPage.newMessageText) )
                    }
                    let changeTextMessage = (text: string) => {
                        store.dispatch( updateNewMessageText(text) )
                    }
                    return <Dialogs
                        changeTextMessage={ changeTextMessage }
                        addMessage={ addMessage }
                        dialogs={state.dialogsPage.dialogs}
                        messages={state.dialogsPage.messages}
                        newMessageText={state.dialogsPage.newMessageText} />
                }
            }
        </StoreContext.Consumer>
    );
}

export default DialogsContainer;