//import { SideBar, PostCard, PeopleToFollow, BottomNav } from 'components'
import { SideBar } from '../../components/sideBar/sideBar';
import { PostCard } from '../../components/postCard/postCard';
import { PeopleToFollow } from '../../components/peopleToFollow/peopleToFollow';
import { BottomNav } from '../../components/navbar/bottomNav';
const Notification = () => {
    const arr = [1, 2, 3];
    return (
        <>
         <div className='grid lg:grid-cols-3  md:grid-cols-2 grid-cols-1'>
            <SideBar />
                <BottomNav />
                <main>
                {arr.map(item =>
                    <div className=' my-4'>
                        <div className='flex pt-4'>
                            <img
                                alt="profile"
                                loading="lazy"
                                src="https://i.pravatar.cc/1000"
                                className='mr-4 w-12 h-12  rounded-full  ml-5' />
                            <div className='flex flex-col mr-auto'>
                                <p>Kumar Harsh</p>
                                <p>Like your post</p>
                            </div>
                        </div>
                        <div className='p-4'>
                            <PostCard />
                        </div>
                    </div>
                )}
                </main>
                <PeopleToFollow/>
                </div>
        </>
    )
}

export {Notification}