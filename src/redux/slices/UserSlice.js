import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    dataConstruct: JSON.parse(localStorage.getItem('localUser')) || []
}

const DataUser = createSlice({
    name: 'DataUser',
    initialState,
    reducers: {
        setDataConstruct(state, action) {
            state.dataConstruct = action.payload
        }
    }
})

export const { setDataConstruct } = DataUser.actions;

export default DataUser.reducer