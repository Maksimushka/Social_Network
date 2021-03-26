export type addMessageACType = {
    type: "ADD-MESSAGE"
    newText: string
}

export const addMessageAC = (newText: string): addMessageACType => ( { type: "ADD-MESSAGE", newText } )