import {addMessageACType, updateNewMessageTextACType} from './dialogs-actions';

export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}

type DialogsReducerType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessageText: string
}
type ActionType = addMessageACType | updateNewMessageTextACType

const initialState: DialogsReducerType = {
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

export const dialogsReducer = (state: DialogsReducerType  = initialState, action: ActionType) => {

    switch (action.type) {
        case "ADD-MESSAGE": {
            let newMessage = { id: new Date().getTime(),  message: state.newMessageText }
            return {
                ...state,
                messages: [...state.messages, newMessage],
                newMessageText: ""
            }
        }
        case "UPDATE-NEW-MESSAGE-TEXT": {
            return {
                ...state,
                newMessageText: action.newText
            }
        }
        default :
            return state
    }
}

