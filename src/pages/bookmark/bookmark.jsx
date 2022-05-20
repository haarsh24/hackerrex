// import { SideBar, PostCard, PeopleToFollow, BottomNav } from '../../components'
import { SideBar } from '../../components/sideBar/sideBar';
import { PostCard } from '../../components/postCard/postCard';
import { PeopleToFollow } from '../../components/peopleToFollow/peopleToFollow';
import { BottomNav } from '../../components/navbar/bottomNav';
import { useDispatch } from 'react-redux'
import { usePost } from '../../hooks/selectors';
const Bookmark = () => {
    const arr = [1, 2, 3]
    const dispatch = useDispatch();
    const { posts, bookmarks } = usePost();
    return (
        <>
            <div className='grid lg:grid-cols-3 mt-14 py-4 h-[100vh] md:grid-cols-2 grid-cols-1'>
            <SideBar />
                <BottomNav />
               
               {bookmarks ==0?<span className="p-2 text-xl flex justify-center"> Bookmark posts to see here</span>: <main className='mt-14 '>
                    
            {bookmarks.map(item => <PostCard key={item._id} post={item} />)}
            </main>}
            <PeopleToFollow />
            </div>
        </>
    )
}

export {Bookmark}