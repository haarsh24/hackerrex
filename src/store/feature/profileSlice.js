import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import axios from "axios";

const initialState = {
    userProfile: null,
    userFollowing: [],
    userFollowers: [],
    isLoading: false,
}
export const getUserData = createAsyncThunk(
    "profile/getUserData",
    async (userID) => {
        try {
            const {
                data: { user },
            } = await axios.get(`/api/users/${userID}`);
            return user;
        } catch (error) {
            toast.error("cannot fetch user.")
        }
    });
const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: {
        [getUserData.pending]: (state) => {
            state.isLoading = true;
        },
        [getUserData.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.userProfile = payload;
        }
    }
})


export const profileReducer = profileSlice.reducer;