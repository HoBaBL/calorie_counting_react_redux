import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    CalloriasSum: []
}

const CalloriasSum = createSlice({
    name: 'CalloriasSum',
    initialState,
    reducers: {
        setCalloriasSum(state, action) {
            state.CalloriasSum = action.payload
        }
    }
})

export const { setCalloriasSum } = CalloriasSum.actions;

export default CalloriasSum.reducer