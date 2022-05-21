import { useAuth, useProfile } from '../../hooks/selectors';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFollowingStatus } from '../../utilities/utilities';
import { followUser, unFollowUser } from '../../store/feature/profileSlice';

const UserCard = ({ user }) => {
    const { _id, firstName, lastName, username, profileImage } = user
    const dispatch = useDispatch();
    const { user: currentUser } = useAuth();
    const { userFollowing } = useProfile();
    const isFollowing = getFollowingStatus(userFollowing, _id);
    const followUserHandler = () => {
        if (!isFollowing) {
            dispatch(followUser(_id))
        } else {
            dispatch(unFollowUser(_id))
        }
    }
    return (
        <div>
            <div className='flex items-center border-2 rounded mx-4 my-4'>
                <Link
                    to={`/profile/${_id}`}
                    className='flex items-center'>
                    {profileImage ? (<img
                        alt="profile"
                        loading="lazy"
                        src="https://i.pravatar.cc/300"
                        className='w-12 h-12 border rounded-full bg-gray-200 mx-2' />) : (
                        <div className='w-12 h-12 flex items-center justify-center font-semibold text-xl border rounded-full bg-sky-200 mx-2'>
                            {firstName && firstName[0].toUpperCase()}
                        </div>
                    )}

                    <div>
                        <div className='flex mr-auto'>
                            <span>{firstName} {lastName}</span>
                            <span>@{username}</span>
                        </div>
                    </div>
                </Link>
                {username !== currentUser.username && (<button
                    className='ml-auto py-2 px-4 mr-4 bg-sky-500 text-white rounded hover:bg-sky-500/50'
                    onClick={followUserHandler}
                >
                    {isFollowing ? "Following" : "Follow"}
                </button>)}
            </div>
        </div>
    )
}

export { UserCard }