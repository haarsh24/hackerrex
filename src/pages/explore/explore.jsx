//import { SideBar, PostCard, PeopleToFollow, BottomNav } from 'components'
import { SideBar } from '../../components/sideBar/sideBar';
import { PostCard } from '../../components/postCard/postCard';
import { PeopleToFollow } from '../../components/peopleToFollow/peopleToFollow';
import { BottomNav } from '../../components/navbar/bottomNav';
import { PostModal } from '../../components/postModal/postModal';
import { useAuth, usePost, useProfile } from '../../hooks/selectors'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getExploreFeed } from "../../utilities/utilities"
import { getPost } from '../../store/feature/postSlice'
const Explore = () => {
    const arr = [1, 2, 3];
    const { user } = useAuth();
    const dispatch = useDispatch();
    const { posts } = usePost();
    const { userFollowing } = useProfile();
    const exploreFeed = getExploreFeed(user, posts, userFollowing)
    useEffect(() => {
        dispatch(getPost());
    }, [dispatch]);
    return (
            <div className='grid lg:grid-cols-3 mt-14 md:grid-cols-2 grid-cols-1'>
            <SideBar />
            <BottomNav />
            
            <div className='flex flex-col'>
                <  PostModal />
                
            <main>
            {exploreFeed.length > 0 ? (
                    exploreFeed.map(post => <PostCard key={post._id} post={post} />)) : (
                    <p className='text-center font-semibold mt-8'>No Post to show.</p>
                )}
                </main>
                
                </div>
                <PeopleToFollow />
            </div>
       
    )
}

export {Explore}