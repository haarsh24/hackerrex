import profileImage from "../../assets/avatar-3.jpg"
import profileImage2 from "../../assets/avatar-2.jpg"
import { getFollowingStatus } from '../../utilities/utilities';
import { Loader } from "../loader/loader"
import { useProfile, useUser } from '../../hooks/selectors';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getSearchedUser } from '../../store/feature/userSlice';
import { Link } from 'react-router-dom';
const PeopleToFollow = () => {
    const dispatch = useDispatch();
    const { suggestions } = useUser();
    const { userFollowing } = useProfile();
    const userSuggestionList = suggestions.filter(
        (user) => !getFollowingStatus(userFollowing, user._id)
    );
    useEffect(() => {
        dispatch(getSearchedUser(""))
    }, [dispatch]);
    console.log(userSuggestionList);
   
    return (
        <>
             <aside className='hidden bg-[#141820] rounded-2xl lg:block lg:right-aside sticky top-[10vh] my-14 max-w-[20rem] mx-auto w-full  h-max py-3'>
             <div className='mt-2 ml-4 text-xl font-semibold'>
                Who to follow?
            </div>
            {userSuggestionList.length > 0 &&
                userSuggestionList.slice(0, 3).map((user) => (
                    <Link
                        key={user._id}
                        to={`/profile/${user._id}`}>
                        <div className='flex mt-4'>
                            <img
                                alt="profile"
                                loading="lazy"
                                src="https://i.pravatar.cc/1000"
                                className='mr-4 w-12 h-12  rounded-full bg-gray-200 ml-5' />
                            <div className='flex flex-col mr-auto'>
                                <p>{user.firstName} {user.lastName}</p>
                                <p>@{user.username}</p>
                            </div>
                            <button className='mr-4 text-sky-500 hover:text-sky-700'>Open</button>
                        </div>
                    </Link>
                ))}
            </aside>
        </>
    )
}

export {PeopleToFollow}