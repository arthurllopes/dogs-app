import { TOKEN_POST } from "../api";
import createAsyncSlice from "./helper/asyncSlice";

const slice = createAsyncSlice({
    name: 'token',
    initialState: {
        data: window.localStorage.getItem('token') || null,
    },
    reducers: {
        resetTokenState(state, action){
            state.data = action.payload
        }
    },
    fetchConfig: (user) => TOKEN_POST(user)
})

export const fetchToken = slice.asyncAction
export const {resetTokenState} = slice.actions

export default slice.reducer