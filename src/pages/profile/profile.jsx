//import { SideBar, ProfileCard, BottomNav } from 'components'
import { SideBar } from '../../components/sideBar/sideBar';
import { BottomNav } from '../../components/navbar/bottomNav';
import {ProfileCard} from "../../components/profileCard/profileCard"
const Profile = () => {
    return (
        <>
            <div className='grid lg:grid-cols-3 mt-14 h-auto py-5  h-[100vh] grid-cols-1 md:grid-cols-2'>
            <SideBar />
            <BottomNav />
            <div className=' max-w-[50rem]  lg:col-span-2 col-span-1 w-full '>
                <ProfileCard />
            </div>
        </div>
        </>
    )
}

export {Profile}