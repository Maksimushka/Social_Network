export type addMessageACType = {
    type: "ADD-MESSAGE"
}
export type updateNewMessageTextACType = {
    type: "UPDATE-NEW-MESSAGE-TEXT",
    newText: string
}

export const addMessageAC = (): addMessageACType => ( { type: "ADD-MESSAGE" } )
export const updateNewMessageTextAC = (newText: string): updateNewMessageTextACType => ({
        type: "UPDATE-NEW-MESSAGE-TEXT",
        newText: newText
})