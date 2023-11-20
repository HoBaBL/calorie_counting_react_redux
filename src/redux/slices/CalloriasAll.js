import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    CalloriasAll: JSON.parse(localStorage.getItem('CalloriasAll')) || []
}

const CalloriasAll = createSlice({
    name: 'CalloriasAll',
    initialState,
    reducers: {
        setCalloriasAll(state, action) {
            state.CalloriasAll = action.payload
        }
    }
})

export const { setCalloriasAll } = CalloriasAll.actions;

export default CalloriasAll.reducer