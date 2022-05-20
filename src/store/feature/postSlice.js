import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
    posts: [],
    isLoading: false,
    bookmarks: [],
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

    export const postComment = createAsyncThunk(
        "post/postComment",
        async ({ postId, comment }) => {
            try {
                const { data: posts } = await axios.post(`/api/posts/comment/${postId}`, { comment });
                return posts;
            } catch (error) {
                toast.error("Failed to post comment.")
            }
        }
    )
    export const likePost = createAsyncThunk(
        "post/likePost",
        async (postID) => {
            try {
                const { data: { posts } } = await axios.post(`/api/posts/like/${postID}`)
                return posts;
            } catch (error) {
                toast.error("Failed to like post");
            }
        }
    )
    export const disLikePost = createAsyncThunk(
        "post/disLikePost",
        async (postID) => {
            try {
                const { data: { posts } } = await axios.post(`/api/posts/dislike/${postID}`)
                return posts;
            } catch (error) {
                toast.error("Failed to dislike post");
            }
        }
    )
    export const addBookMarkPost = createAsyncThunk(
        "post/addBookMarkPost",
        async (postId) => {
            try {
                const { data: { bookmarks } } = await axios.post(`/api/users/bookmark/${postId}`)
                return bookmarks;
            } catch (error) {
                toast.error("Failed to bookmark post.")
            }
        }
    )
    export const removeBookMarkPost = createAsyncThunk(
        "post/removeBookMarkPost",
        async (postId) => {
            try {
                const { data: { bookmarks } } = await axios.post(`/api/users/remove-bookmark/${postId}`)
                return bookmarks;
            } catch (error) {
                toast.error("Failed to bookmark posts.")
            }
        }
    )
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
        [postComment.fulfilled]: (state, { payload }) => {
            state.posts = payload.posts.reverse();
        },
        [likePost.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.posts = payload.reverse();
        },
        [likePost.rejected]: (state) => {
            state.error = true;
        },
        [disLikePost.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.posts = payload.reverse();
        },
        [disLikePost.rejected]: (state) => {
            state.error = true;
        },
        [addBookMarkPost.fulfilled]: (state, { payload }) => {
            state.bookmarks = payload.reverse();
        },
        [addBookMarkPost.rejected]: (state) => {
            state.error = true;
        },
        [removeBookMarkPost.fulfilled]: (state, { payload }) => {
            state.bookmarks = payload.reverse();
        },
        [removeBookMarkPost.rejected]: (state) => {
            state.error = true;
        }
    },
});
export const postReducer = postSlice.reducer;
