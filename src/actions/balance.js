export const addTen = (balance) => {
    return {
        type: 'balance/add',
        payload: balance
    }
}

export const reduceTen = (balance) => {
    return {
        type: 'balance/reduce',
        payload: balance
    }
}