import { createSlice } from "@reduxjs/toolkit";
import { TOKEN_POST } from "../api";

const slice = createSlice({
    name: 'token',
    initialState: {
        loading: false,
        data: window.localStorage.getItem('token') || null,
        error: null
    },
    reducers: {
        fetchSuccess(state, action){
            state.data = action.payload
        },
        resetTokenState(state, action){
            state.data = action.payload
        },
        fetchError(state, action){
            state.error = action.payload
            state.data = null
        }
    }
})

export const {fetchSuccess, resetTokenState, fetchError} = slice.actions

export const fetchToken = (user) => async (dispatch) => {
    try {
        const {url, options} = TOKEN_POST(user)
        const response = await fetch(url, options)
        const data = await response.json()
        if(!response.ok) throw new Error(data.message)
        return dispatch(fetchSuccess(data))
    } catch (error) {
        return dispatch(fetchError(error.message))
    }
}

export default slice.reducer