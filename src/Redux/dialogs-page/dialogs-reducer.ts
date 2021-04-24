import {addMessageACType} from './dialogs-actions';

export type MessagesType = {
    id: number
    message: string
}
export type DialogsType = {
    id: number
    name: string
}

export type DialogsReducerType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}
type ActionType = addMessageACType

const initialState: DialogsReducerType = {
    dialogs: [
        {name: 'Dimych', id: 1},
        {name: 'Andrey', id: 2},
        {name: 'Galina', id: 3},
        {name: 'Victor', id: 4},
        {name: 'Maxim', id: 5},
        {name: 'Sveta', id: 6},
    ],
    messages: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'Hi'},
        {id: 3, message: 'You are right?'},
        {id: 4, message: 'Yes, i am!'},
    ],
}

export const dialogsReducer = (state: DialogsReducerType = initialState, action: ActionType): DialogsReducerType => {
    switch (action.type) {
        case 'ADD-MESSAGE': {
            let newMessage = {id: new Date().getTime(), message: action.newText}
            return {
                ...state,
                messages: [...state.messages, newMessage],
            }
        }
        default :
            return state
    }
}

