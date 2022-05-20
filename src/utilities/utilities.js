export const getPostLikedStatus = (user, likes) => {
    return likes?.likedBy.some(({ username }) => username === user.username);
};


export const getPostBookmarkStatus = (postId, bookmarks) => {
    return bookmarks.some(({ _id })=>_id === postId )
}