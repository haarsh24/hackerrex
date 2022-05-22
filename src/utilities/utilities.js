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
export const getPostsBySortType = (posts, sortType) => {
    switch (sortType) {
        case "SORT_BY_RECENT":
            return [...posts].sort(
                (post1, post2) => new Date(post2.updatedAt) - new Date(post1.updatedAt)
            );

        case "SORT_BY_TRENDING":
            return [...posts].sort((post1, post2) => {
                const totalReactionsOnPost1 =
                    post1.comments.length + post1.likes.likedBy.length;

                const totalReactionsOnPost2 =
                    post2.comments.length + post2.likes.likedBy.length;
                return totalReactionsOnPost2 - totalReactionsOnPost1;
            });

        default:
            return posts;
    }
};
export const getHomeFeed = (loggedInUser, posts, loggedInUserfollowings) => {
    const followingUserIdSet = new Set();
    loggedInUserfollowings?.forEach(({ _id }) => followingUserIdSet.add(_id));
    return posts?.filter(
        ({ userId }) =>
            loggedInUser._id === userId || followingUserIdSet.has(userId)
    );
};

export const getDate = (updatedDate) => {
    let date = new Date(updatedDate);
    date = String(date).split(" ");
    return `${date[1]} ${date[2]}`;
};