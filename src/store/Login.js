import { USER_GET } from "../api";
import createAsyncSlice from "./helper/asyncSlice";
import { fetchToken, resetTokenState} from "./Token";

const slice = createAsyncSlice({
    name: 'login',
    reducers: {
        resetUserState(state, action){
            state.data = action.payload
        },
    },
    fetchConfig: (token) => USER_GET(token)
})

const fetchUser = slice.asyncAction
const {resetUserState, fetchError} = slice.actions

export const userLogin = (user) => async (dispatch) => {
    const {payload} = await dispatch(fetchToken(user))
    if(payload.token) {
        window.localStorage.setItem('token', payload.token)
        return await dispatch(fetchUser(payload.token))
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