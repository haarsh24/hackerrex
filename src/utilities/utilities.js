export const getPostLikedStatus = (user, likes) => {
    return likes?.likedBy.some(({ username }) => username === user.username);
};

export const getPostBookmarkStatus = (postId, bookmarks) => {
    return bookmarks.some(({ _id })=>_id === postId )
}

export const getExploreFeed = (currentUser, posts, userFollowing) => {
    const followingUserIdSet = new Set();
    userFollowing?.forEach(({ _id }) => followingUserIdSet.add(_id));
    return posts?.filter(
        ({ userId }) =>
            currentUser._id !== userId && !followingUserIdSet.has(userId)
    );
};
export const getCurrentUserPosts = (userId, posts) => {
    return posts.filter(({ userId: _id }) => _id === userId);
};
export const getFollowingStatus = (following, followUserId) => {
    return following?.some(({ _id }) => _id === followUserId);
};