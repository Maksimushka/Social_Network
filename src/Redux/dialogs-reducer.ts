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

let initialState = {
    dialogs: [
        {name: "Dimych", id: 1 },
        {name: "Andrey", id: 2 },
        {name: "Galina", id: 3 },
        {name: "Victor", id: 4 },
        {name: "Maxim", id: 5 },
        {name: "Sveta", id: 6 },
    ],
    messages: [
    {id: 1, message:"Hello" },
    {id: 2, message:"Hi" },
    {id: 3, message:"You are right?" },
    {id: 4, message:"Yes, i am!" },
],
    newMessageText: "",
}

export const dialogsReducer = (state: DialogsPageType  = initialState, action: ActionsTypes) => {

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
    return state
}
