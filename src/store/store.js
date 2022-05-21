import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./feature/authSlice";
import { modalReducer } from "./feature/modalSlice";
import { postReducer } from "./feature/postSlice";
import { profileReducer } from "./feature/profileSlice";
import { usersReducer } from "./feature/userSlice";
export const store = configureStore({
    reducer: {
        user: authReducer,
        modal: modalReducer,
        posts: postReducer,
        profile: profileReducer,
        users: usersReducer,
    }
})