// import { SideBar, PostCard, PeopleToFollow, BottomNav } from '../../components'
import { SideBar } from '../../components/sideBar/sideBar';
import { PostCard } from '../../components/postCard/postCard';
import { PeopleToFollow } from '../../components/peopleToFollow/peopleToFollow';
import { BottomNav } from '../../components/navbar/bottomNav';
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
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
                <main className='my-14 '>
                {bookmarks.length > 0 ? (
                    bookmarks.map(item => <PostCard key={item._id} post={item} />)) :
                    (<p className="text-center font-semibold mt-8 my-8">
                        You don't have any bookmarks
                        <Link to="/explore" className="text-indigo-500 hover:underline ml-1">
                            Explore
                        </Link>
                    </p>)
                } 
            </main>
            <PeopleToFollow />
            </div>
        </>
    )
}

export {Bookmark}