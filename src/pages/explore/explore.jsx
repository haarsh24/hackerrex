//import { SideBar, PostCard, PeopleToFollow, BottomNav } from 'components'
import { SideBar } from '../../components/sideBar/sideBar';
import { PostCard } from '../../components/postCard/postCard';
import { PeopleToFollow } from '../../components/peopleToFollow/peopleToFollow';
import { BottomNav } from '../../components/navbar/bottomNav';
import { PostModal } from '../../components/postModal/postModal';
import { usePost } from '../../hooks/selectors'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getPost } from '../../store/feature/postSlice'
const Explore = () => {
    const arr = [1, 2, 3];
    const { posts } = usePost();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPost());
    }, [])
    return (
            <div className='grid lg:grid-cols-3 mt-14  md:grid-cols-2 grid-cols-1'>
            <SideBar />
            <BottomNav />
            <div className='flex flex-col'>
           <  PostModal/>
            <main>
                {posts.map(post => <PostCard key={post._id} post={post} />)}
                </main>
                </div>
            <PeopleToFollow />
            </div>
       
    )
}

export {Explore}