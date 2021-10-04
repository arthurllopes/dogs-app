import { PHOTO_GET } from "../api";
import createAsyncSlice from "./helper/asyncSlice";

const slice = createAsyncSlice({
    name: 'photo',
    fetchConfig: (id) => PHOTO_GET(id)
})

export const fetchPhoto = slice.asyncAction

export default slice.reducer