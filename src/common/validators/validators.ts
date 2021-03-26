export const requiredField = (value: any) => {
    if (value) return undefined

    return 'Field is Required'
}
export const maxLengthCreator = (length: any) => (value: any) => {
    if (value.length > length) return `Max length is ${length} symbols`

    return undefined
}
export const minLengthCreator = (length: any) => (value: any) => {
    if (value.length < length) return `Min length is ${length} symbols`

    return undefined
}