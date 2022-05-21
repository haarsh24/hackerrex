import { PostCard } from '../postCard/postCard';
import { usePost } from '../../hooks/selectors';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { getPost } from '../../store/feature/postSlice';
import { getCurrentUserPosts } from '../../utilities/utilities';

const Posts = () => {
    const { userId } = useParams();
    const dispatch = useDispatch();
    const { posts } = usePost();
    const currentUserPosts = getCurrentUserPosts(userId, posts);
    useEffect(() => {
        dispatch(getPost());
    }, [dispatch]);
    return (
        <div className='p-4'>
            {currentUserPosts.length > 0 ? (
                currentUserPosts.map((post) => <PostCard key={post._id} post={post} />))
                : (
                    <p className='text-center font-semibold mt-8'>No Post to show.</p>
                )}
        </div>
    )
}

export { Posts }