//import { SideBar, ProfileCard, BottomNav } from 'components'
import { SideBar } from '../../components/sideBar/sideBar';
import { BottomNav } from '../../components/navbar/bottomNav';
import { ProfileCard } from "../../components/profileCard/profileCard";
import { useAuth } from '../../hooks/selectors'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getUserData } from '../../store/feature/profileSlice'
const Profile = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const { userId } = useParams();
    useEffect(() => {
        dispatch(getUserData(userId))
    }, [userId, dispatch, user])
    return (
        <>
            <div className='grid lg:grid-cols-3 mt-14 py-4 h-[100vh] md:grid-cols-2 grid-cols-1'>
            <SideBar />
            <BottomNav />
            <div className=' max-w-[50rem]  bg-[#141820] my-12 rounded-2xl lg:col-span-2 col-span-1 w-full '>
                <ProfileCard />
            </div>
        </div>
        </>
    )
}

export {Profile}