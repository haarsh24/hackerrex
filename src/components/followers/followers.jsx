import React from 'react'
import { Link } from 'react-router-dom';
import { useProfile } from '../../hooks/selectors';
import { UserCard } from '../userCard/userCard';
const Followers = () => {
    const { userProfile } = useProfile();
    const { followers } = userProfile;
    return (
        <>
            {followers?.length > 0 ? (
                followers.map((user) => <UserCard key={user._id} user={user} />)) : (
                <p className="text-center font-semibold mt-8">
                    You don't have any follower, please connect with people.
                    <Link to="/explore" className="text-blue-500 hover:underline ml-1">
                        Explore
                    </Link>
                </p>
            )}
        </>
    )
}

export { Followers }