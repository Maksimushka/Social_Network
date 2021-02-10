import {ActionsTypes, StoreType} from "./state";

export const dialogsReducer = (store: StoreType, action: ActionsTypes) => {

    if (action.type === "ADD-MESSAGE") {
        store._addMessage(action.messageText)
    } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
        store._updateNewMessageText(action.newText)
    }

    return store
}
