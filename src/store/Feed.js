import { PHOTOS_GET } from "../api";
import createAsyncSlice from "./helper/asyncSlice";
const slice = createAsyncSlice({
    name: 'feed',
    initialState: {
        list: [],
        pages: 1,
        infinite: true,
    },
    fetchConfig: ({page, total, user}) => PHOTOS_GET({page, total, user}),
    reducers: {
        addPhotos(state, action){
            state.list = [...state.list, ...action.payload]
            if(action.payload.length === 0) state.infinite = false
        },
        addPage(state){
            state.pages++
        },
        resetFeed(state){
            state.infinite = true
            state.list = []
            state.pages = 1
        },
    }
})

export const {addPage, addPhotos, resetFeed } = slice.actions

export const fetchFeed = slice.asyncAction

export const loadNewPhotos = ({total, user}) => async (dispatch, getState) => {
    const {Feed} = getState()
    const {payload} = await dispatch(fetchFeed({page: Feed.pages, total, user}))
    dispatch(addPage())
    dispatch(addPhotos(payload))
}

export default slice.reducer