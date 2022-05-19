// import { SideBar, PostCard, PeopleToFollow, BottomNav } from '../../components'
import { SideBar } from '../../components/sideBar/sideBar';
import { PostCard } from '../../components/postCard/postCard';
import { PeopleToFollow } from '../../components/peopleToFollow/peopleToFollow';
import { BottomNav } from '../../components/navbar/bottomNav';
const Bookmark = () => {
    const arr = [1, 2, 3]
    return (
        <>
            <div className='grid lg:grid-cols-3 mt-14 py-4 md:grid-cols-2 grid-cols-1'>
            <SideBar />
                <BottomNav />
               
            <main className='mt-14 '>
                {arr.map(item => <PostCard />)}
            </main>
            <PeopleToFollow />
            </div>
        </>
    )
}

export {Bookmark}