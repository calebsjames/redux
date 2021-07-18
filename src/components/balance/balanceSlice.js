import { createSlice } from '@reduxjs/toolkit'

export const balanceSlice = createSlice({
    name: 'balance'
    initialState: {
        value: 0
    },
    reducers : {
        increment: state => {
        state.value += 10
        },

        decrement: state => {
            state.value -= 10
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        }
    }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer