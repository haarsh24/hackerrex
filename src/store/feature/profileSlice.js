import {
    createAsyncThunk,
    createSlice
} from "@reduxjs/toolkit";
import {
    toast
} from "react-toastify";
import axios from "axios";
import { useSelector } from "react-redux";
import { loginUser, logout } from "./authSlice";
import { useAuth } from "../../hooks/selectors";
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
                data: {
                    user
                },
            } = await axios.get(`/api/users/${userID}`);
            return user;
        } catch (error) {
            toast.error("cannot fetch user.")
        }
    });

export const followUser = createAsyncThunk(
    "profile/followUser",
    async (followUserId) => {
        try {
            const {
                data: {
                    followUser,
                    user: {
                        followers,
                        following
                    },
                },
            } = await axios.post(`/api/users/follow/${followUserId}`);
            return {
                followUser,
                followers,
                following
            };
        } catch (error) {
            toast.error("cannot follow.")
        }
    }
)
export const unFollowUser = createAsyncThunk(
    "profile/unFollowUser",
    async (followingUserId) => {
        try {
            const {
                data: {
                    followUser,
                    user: {
                        followers,
                        following
                    },
                },
            } = await axios.post(`/api/users/unfollow/${followingUserId}`);
            return {
                followUser,
                followers,
                following
            };
        } catch (error) {
            toast.error("cannot unfollow.")
        }
    }
)
const profileSlice = createSlice({
    name: "profile",
    initialState,
    reducers: {},
    extraReducers: {
        [getUserData.pending]: (state) => {
            state.isLoading = true;
        },
        [getUserData.fulfilled]: (state, {
            payload
        }) => {
            state.isLoading = false;
            state.userProfile = payload;
        },
        [followUser.pending]: (state) => {
            state.isLoading = true;
        },
        [followUser.fulfilled]: (state, {
            payload
        }) => {
            state.isLoading = false;
            state.userFollowers = payload.followers;
            state.userFollowing = payload.following;
        },
        [unFollowUser.pending]: (state) => {
            state.isLoading = true;
        },
        [unFollowUser.fulfilled]: (state, {
            payload
        }) => {
            state.isLoading = false;
            state.userFollowers = payload.followers;
            state.userFollowing = payload.following;
        },
        [loginUser.fulfilled]: (state, {
            payload
        }) => {
            state.userFollowers = payload.foundUser.followers;
            state.userFollowing = payload.foundUser.following;
        },
        [logout]: (state) => {
            state.userProfile = null;
            state.userFollowing = [];
            state.userFollowers = [];
            state.isLoading = false;
        }
    }
})


export const profileReducer = profileSlice.reducer;