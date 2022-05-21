import { UserCard } from '../userCard/userCard';
import { useProfile } from '../../hooks/selectors';
import React from 'react'
import { Link } from 'react-router-dom';

const Following = () => {
    const { userProfile } = useProfile();
    const { following } = userProfile;
    return (
        <>
            {following?.length > 0 ? (
                following.map((user) => <UserCard key={user._id} user={user} />)) : (
                <p className="text-center font-semibold mt-8">
                    No following to show, please follow some users
                    <Link to="/explore" className="text-blue-500 hover:underline ml-1">
                        Explore
                    </Link>
                </p>
            )}
        </>)
}

export { Following }