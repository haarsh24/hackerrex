import profileImage2 from "../../assets/avatar-2.jpg"
import { posts } from '../../backend/db/posts';
import { Link, useNavigate, useParams, Outlet ,NavLink} from 'react-router-dom';
import { showModal } from '../../store/feature/modalSlice';
import { useDispatch } from "react-redux";
import { PostCard } from "../postCard/postCard";
import { logout } from "../../store/feature/authSlice"
import { followUser, unFollowUser } from '../../store/feature/profileSlice'
import { getCurrentUserPosts, getFollowingStatus } from '../../utilities/utilities';
import { useAuth, usePost, useProfile } from '../../hooks/selectors'
const ProfileCard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userId } = useParams();
    const { user } = useAuth();
    const { posts } = usePost();
    const { userProfile, userFollowing } = useProfile();
    const { _id, firstName, lastName, username, bio, websiteUrl, profileImage } = userProfile ?? {};
    const logoutHandler = () => {
        dispatch(logout(user));
        localStorage.clear();
        navigate("/login")
    }
    const isFollowing = getFollowingStatus(userFollowing, userId);
    const currentUserPosts = getCurrentUserPosts(userId, posts);
    const editProfileHandler = () => {
        dispatch(showModal({ type: "profile" }));
    }
   
    const followUserHandler = () => {
        if (!isFollowing) {
            dispatch(followUser(userId))
        } else {
            dispatch(unFollowUser(userId))
        }
    }
    return (
        <>
            <div className='flex items-center '>
                <Link to="/">
                    {profileImage ? (<img
                        alt={[profileImage?.original_name]}
                        loading="lazy"
                        src={profileImage?.url}
                        className='w-12 h-12 border rounded-full bg-gray-200 mx-5' />) : (
                        <div className='w-16 h-16 flex items-center justify-center font-semibold text-xl border rounded-full bg-sky-200 mx-5'>
                            {firstName && firstName[0].toUpperCase()}
                        </div>
                    )}
                </Link>
                <div className='flex flex-col py-4 m-2'>
                    <div className='flex items-center'>
                        <div>
                            <p className='mr-4'>{firstName} {lastName}</p>
                            <p className='mr-4'>@{username}</p>
                        </div>
                        {userId === user._id ? (
                            <>
                                <button
                                    className='py-2 px-4 mr-4 bg-sky-500 text-white rounded hover:bg-sky-500/50'
                                    onClick={editProfileHandler}
                                >
                                    Edit
                                </button>
                                <button className='py-2 px-4 text-sky-500 border border-sky-500 bg-white rounded hover:text-white hover:bg-sky-500/50'
                                    onClick={logoutHandler}>Logout</button>
                            </>) :
                            (<button
                                className='py-2 px-4 mr-4 bg-sky-500 text-white rounded hover:bg-sky-500/50'
                                onClick={followUserHandler}
                            >
                                {isFollowing ? "Following" : "Follow"}
                            </button>)}

                    </div>
                    <div className='flex justify-between mt-3'>

                        <div>
                            <Link to={`/profile/${_id}`}>
                                <span className='font-semibold'>{currentUserPosts?.length || 0}</span>
                                <span className='ml-1'>posts</span>
                            </Link>
                        </div>
                        <div className='ml-6'>
                            <Link to={`/profile/${_id}/followers`}>
                                <span className='font-semibold'>{userProfile?.followers?.length || 0}</span>
                                <span className='ml-1'>followers</span>
                            </Link>
                        </div>
                        <div className='ml-6'>
                            <Link to={`/profile/${_id}/following`}>
                                <span className='font-semibold'>{userProfile?.following?.length || 0}</span>
                                <span className='ml-1'>following</span>
                            </Link>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <p>{bio}</p>
                        <p>Website:
                            <span className='text-sky-500'><a
                                target="_blank"
                                href={websiteUrl}>
                                {websiteUrl}
                            </a></span>
                        </p>
                    </div>
                </div>
            </div>
            <div className="max-w-xl mx-auto mt-4 pb-4">
                <div className="border-b flex items-center justify-between">
                    <NavLink
                        end
                        to={`/profile/${_id}`}
                        className={({ isActive }) =>
                            `${isActive
                                ? "text-blue-500 border-b-2 mb-[-0.8px] border-blue-500"
                                : ""
                            } font-semibold text-sm md:text-base py-2 px-4 hover:text-blue-500`
                        }
                    >
                        Posts
                    </NavLink>
                    <NavLink
                        end
                        to={`/profile/${_id}/followers`}
                        className={({ isActive }) =>
                            `${isActive
                                ? "text-blue-500 border-b-2 mb-[-0.8px] border-blue-500"
                                : ""
                            } font-semibold text-sm md:text-base py-2 px-4 hover:text-blue-500`
                        }
                    >
                        Followers
                    </NavLink>
                    <NavLink
                        end
                        to={`/profile/${_id}/following`}
                        className={({ isActive }) =>
                            `${isActive
                                ? "text-blue-500 border-b-2 mb-[-0.8px] border-blue-500"
                                : ""
                            } font-semibold text-sm md:text-base py-2 px-4 hover:text-blue-500`
                        }
                    >
                        Following
                    </NavLink>
                </div>
            </div>
            <div><Outlet /></div>
        </>
    )
}

export {ProfileCard}