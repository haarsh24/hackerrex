import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    userlist: [],
    suggestions: [],
    isLoading: false,
}
export const getSearchedUser = createAsyncThunk(
    "users/getSearchedUser",
    async (searchQuery = "", { getState }) => {
        try {
            const { user } = getState();
            console.log(user);
            const { data: { users }, } = await axios.get(`/api/users?search=${searchQuery}`);
            return { users, loggedInUser: user.user, searchQuery }
        } catch (error) {

        }
    }
)
const usersSlice = createSlice({
    name: "users",
    initialState,
    extraReducers: {
        [getSearchedUser.pending]: (state, { payload }) => {
            state.isLoading = true;
        },
        [getSearchedUser.fulfilled]: (state, { payload }) => {
            state.isLoading = true;
            state.userlist = payload?.users.filter(
                (user) => user._id !== payload.loggedInUser._id
            );
            state.suggestions = payload.searchQuery === "" ? state.userlist : state.suggestions;
        },
    },
});

export const usersReducer = usersSlice.reducer;