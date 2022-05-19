import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    posts: [],
    isLoading: false,
    error: null,
}
export const getPost = createAsyncThunk("posts/getPost",
    async () => {
        try {
            const { data: posts } = await axios.get("/api/posts")
            return posts;
        } catch (error) {
            toast.error("Failed to get post.")
        }
    })
export const addPost = createAsyncThunk(
    "posts/addPost",
    async (postData) => {
        try {
            const { data: posts } = await axios.post("/api/posts", { postData })
            return posts;
        } catch (error) {
            toast.error("Failed to post.")
        }
    })
export const editPost = createAsyncThunk(
    "posts/editPost",
    async (postData) => {
        try {
            const { data: { posts } } = await axios.post(`/api/posts/edit/${postData._id}`, { postData })
            return posts;
        } catch (error) {
            toast.error("Failed to edit post.")
        }
    }
)
export const deletePost = createAsyncThunk(
    "posts/deletePost",
    async (postID) => {
        try {
            const { data: posts } = await axios.delete(`/api/posts/${postID}`)
            return posts;
        } catch (error) {
            toast.error("Failed to delete post.")
        }
    })
export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {},
    extraReducers: {
        [getPost.pending]: (state) => {
            state.isLoading = true;
        },
        [getPost.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.posts = payload.posts.reverse();
        },
        [getPost.rejected]: (state) => {
            state.error = true
        },
        [addPost.pending]: (state) => {
            state.isLoading = true
        },
        [addPost.fulfilled]: (state, { payload }) => {
            state.isLoading = false
            state.posts = payload.posts.reverse();
        },
        [addPost.rejected]: (state) => {
            state.error = true
        },
        [editPost.pending]: (state) => {
            state.isLoading = true;
        },
        [editPost.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.posts = payload.reverse();
        },
        [editPost.rejected]: (state) => {
            state.isLoading = false;
        },
        [deletePost.fulfilled]: (state, { payload }) => {

            state.posts = payload.posts.reverse();
        },
        [deletePost.rejected]: (state) => {
            state.error = "Could not delete the post!";
        },
    },
});
export const postReducer = postSlice.reducer;
