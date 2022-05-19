import axios from "axios";
import {
    toast
} from "react-toastify";
import {
    createSlice,
    createAsyncThunk
} from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLoading: false,
    error: null,
}

export const loginUser = createAsyncThunk(
    "auth/login",
    async ({
        username,
        password
    }, {
        rejectWithValue
    }) => {
        try {
            const {
                data: {
                    foundUser,
                    encodedToken
                },
            } = await axios.post("/api/auth/login", {
                username,
                password
            });
            localStorage.setItem("token", encodedToken)
            localStorage.setItem('userData', JSON.stringify(foundUser));
            axios.defaults.headers.common["authorization"] = encodedToken;
            return {
                foundUser,
                encodedToken
            };
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue("Email or password is incorrect");
        }
    }
);
export const signupUser = createAsyncThunk(
    "auth/signup",
    async (userDetails, { rejectWithValue }) => {
        try {
            const {
                data: { createdUser, encodedToken },
            } = await axios.post("/api/auth/signup", { ...userDetails });
            localStorage.setItem("token", encodedToken)
            localStorage.setItem('userData', JSON.stringify(createdUser));
            return { createdUser, encodedToken };
            axios.defaults.headers.common["authorization"] = encodedToken;
        } catch (error) {
            toast.error(error.response.data.message);
            return rejectWithValue("Email or password is incorrect");
        }
    }
);
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logout: (state) => {
            state.user = null;
        }
    },
    extraReducers: {
        [loginUser.pending]: (state) => {
            state.error = null;
            state.isLoading = true;
        },
        [loginUser.fulfilled]: (state, {
            payload
        }) => {
            state.isLoading = false;
            state.user = payload.foundUser;
        },
        [loginUser.rejected]: (state, {
            payload
        }) => {
            state.error = payload;
            state.isLoading = false;
        },
        [signupUser.pending]: (state) => {
            state.error = null;
            state.isLoading = true;
        },
        [signupUser.fulfilled]: (state, {
            payload
        }) => {
            state.isLoading = false;
            state.user = payload.createdUser;
        },
        [signupUser.rejected]: (state, {
            payload
        }) => {
            state.error = payload;
            state.isLoading = false;
        }
    }
})

export const {
    logout
} = authSlice.actions;
export const authReducer = authSlice.reducer;