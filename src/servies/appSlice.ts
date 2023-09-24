import {createSlice} from '@reduxjs/toolkit'


type AuthState = {
    id: number
}

const initialState: AuthState = {
    id: 0
}

const slice = createSlice({
    initialState,
    name: 'app',
    reducers: {
        getId: (state, action) => {
            state.id = action.payload.id
        },
    },
})

export const appReducer = slice.reducer

export const getActions = slice.actions
