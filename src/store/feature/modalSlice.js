import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShow: false,
    currentPost: null,
}
const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showModal: (state, action) => {
            state.isShow = true;
            if (action.payload) state.currentPost = action.payload
        },
        closeModal: (state) => {
            state.isShow = false;
            state.currentPost = null;
        },
    }
})
export const { showModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;