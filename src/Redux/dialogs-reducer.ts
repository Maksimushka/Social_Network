import {ActionsTypes, DialogsPageType} from "./state";

export const addMessageAC = (messageText: string) => {
    return {
        type: "ADD-MESSAGE",
        messageText: messageText
    } as const
}
export const updateNewMessageText = (newText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newText: newText
    } as const
}

export const dialogsReducer = (state: DialogsPageType, action: ActionsTypes) => {

    switch (action.type) {
        case "ADD-MESSAGE":
            let newMessage = { id: 4,  message: action.messageText }
            state.messages.push(newMessage)
            state.newMessageText = ""
            break
        case "UPDATE-NEW-MESSAGE-TEXT":
            state.newMessageText = action.newText
            break
        default :
            return state
    }

    // if (action.type === "ADD-MESSAGE") {
    //     let newMessage = { id: 4,  message: action.messageText }
    //     state.messages.push(newMessage)
    //     state.newMessageText = ""
    // } else if (action.type === "UPDATE-NEW-MESSAGE-TEXT") {
    //     state.newMessageText = action.newText
    // }

    return state
}
