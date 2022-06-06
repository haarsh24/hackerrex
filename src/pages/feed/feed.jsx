//import { SideBar, PostCard, PeopleToFollow, BottomNav } from 'components'
import { SideBar } from '../../components/sideBar/sideBar';
import { PostCard } from '../../components/postCard/postCard';
import { PeopleToFollow } from '../../components/peopleToFollow/peopleToFollow';
import { BottomNav } from '../../components/navbar/bottomNav';
import { PostModal } from '../../components/postModal/postModal';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getExploreFeed } from "../../utilities/utilities"
import { getPost, setPostSortType } from '../../store/feature/postSlice'
import { getHomeFeed, getPostsBySortType } from '../../utilities/utilities'
import { useAuth, usePost, useProfile } from '../../hooks/selectors'
const Feed = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();
    const { userFollowing } = useProfile();
    const { posts, postSortType } = usePost();
    const exploreFeed = getExploreFeed(user, posts, userFollowing)
    const homeFeed = getHomeFeed(user, posts, userFollowing);
    const sortedHomeFeed = getPostsBySortType(homeFeed, postSortType);
    console.log(sortedHomeFeed);
    useEffect(() => {
        dispatch(getPost());
    }, [])

    const filterHandler = (type) => {
        dispatch(setPostSortType(type))
    }
    return (
            <div className='grid lg:grid-cols-3 mt-14 py-4  md:grid-cols-2 grid-cols-1'>
            <SideBar />
            <BottomNav />
            <div className='flex flex-col'>
         
            <main>
            <div className='flex justify-center gap-4 my-6'>
                    <span>Sort by:</span>
                    <button
                        className='px-2 py-1 bg-indigo-500 text-white hover:bg-indigo-500/75 rounded hover:transition-all'
                        onClick={() => filterHandler("SORT_BY_RECENT")}
                    >Recent</button>
                    <button
                        className='px-2 py-1 bg-indigo-500 text-white hover:bg-indigo-500/75 rounded hover:transition-all'
                        onClick={() => filterHandler("SORT_BY_TRENDING")}
                    >Trending</button>
                    </div>
                    <  PostModal/>
                {sortedHomeFeed.length > 0 ? sortedHomeFeed.map(post => <PostCard key={post._id} post={post} />) : (
                    <p className="">
                        
                        {exploreFeed.map(post => <PostCard key={post._id} post={post} />) }
                    </p>
                )}
                </main>
                
                </div>
            <PeopleToFollow />
            </div>
       
    )
}

export {Feed}