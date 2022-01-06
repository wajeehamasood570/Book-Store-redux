export const addBook = (payload) => {
    return {type:'ADDBOOK',payload}
}
export const showBooks = () =>{
    return {type: 'LIST'}
}

export const inc = () => {
    return {type:'INC'}
}