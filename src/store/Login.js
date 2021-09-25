import { createSlice } from "@reduxjs/toolkit";
import { USER_GET } from "../api";
import { fetchToken, resetTokenState} from "./Token";

const slice = createSlice({
    name: 'login',
    initialState: {
        data: null,
        loading: false,
        error: null
    },
    reducers: {
        fetchSuccess(state, action){
            state.data = {...action.payload}
        },
        resetUserState(state, action){
            state.data = action.payload
        },
        fetchError(state, action){
            state.error = `${action.payload}`
            state.data = null
        }
    }
})


const {fetchSuccess, resetUserState, fetchError} = slice.actions

export const fetchUser = (token) => async (dispatch) => {
    const {url, options} = USER_GET(token)
    const response = await fetch(url, options)
    const data = await response.json()
    if(response.ok) {
        return dispatch(fetchSuccess(data))
    } else {
        return dispatch(fetchError('Dados incorretos'))
    }
}

export const userLogin = (user) => async (dispatch) => {
    const {payload} = await dispatch(fetchToken(user))
    console.log(payload)
    if(payload.token) {
        window.localStorage.setItem('token', payload.token)
        await dispatch(fetchUser(payload.token))
    } else {
        dispatch(fetchError(payload))
    }
}

export const userLogout = () => async (dispatch) => {
    dispatch(resetUserState(null))
    dispatch(resetTokenState(null))
    window.localStorage.removeItem('token')
}

export const autoLogin = () => async (dispatch, getState) => {
    const {Token} = getState()
    if (Token?.data) {
        const response = await dispatch((fetchUser(Token.data)))
        if(response.type === fetchError.type){

        }
    }
}

export default slice.reducer