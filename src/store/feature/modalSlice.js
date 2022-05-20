import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isShow: false,
    currentPost: null,
    type:""
}
const modalSlice = createSlice({
    name: "modal",
    initialState,
    reducers: {
        showModal: (state, action) => {
            state.isShow = true;
            state.type = action.payload.type;
            if (action.payload.post) state.currentPost = action.payload.post;
        },
        closeModal: (state) => {
            state.isShow = false;
            state.type = "";
            state.currentPost = null;
        },
    }
})
export const { showModal, closeModal } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;