import profileImage2 from "../../assets/avatar-2.jpg"
import { posts } from '../../backend/db/posts';
import { useAuth, usePost } from '../../hooks/selectors';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { showModal } from '../../store/feature/modalSlice';
import { useDispatch } from "react-redux";
import { PostCard } from "../postCard/postCard";
import { logout } from "../../store/feature/authSlice"
const ProfileCard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userId } = useParams();
    const { user } = useAuth();
    const { posts } = usePost();
    const { firstName, lastName, username, bio, websiteUrl } = user;

    const logoutHandler = () => {
        dispatch(logout(user));
        localStorage.clear();
        navigate("/login")
    }
    const usersPost = posts.filter(post => post.userId === userId)

    const profileImage = false;
    const editProfileHandler = () => {
        dispatch(showModal({ type: "profile" }));
    }
    return (
        <>
            <div className='flex items-center'>
                <Link to="/">
                    {profileImage ? (<img
                        alt="profile"
                        loading="lazy"
                        src={profileImage2}
                        className='w-12 h-12  mx-5' />) : (
                        <div className='w-16 h-16 flex items-center justify-center font-semibold text-xl border rounded-full bg-sky-200 mx-5'>
                            {firstName[0].toUpperCase()}
                        </div>
                    )}
                </Link>
                <div className='flex flex-col py-4 m-2'>
                    <div className='flex items-center'>
                        <div>
                            <p className='mr-4'>{firstName} {lastName}</p>
                            <p className='mr-4'>@{username}</p>
                        </div>
                        <button
                            className='py-2 px-4 mr-4 bg-sky-500 text-white rounded hover:bg-sky-500/50'
                            onClick={editProfileHandler}
                        >
                            Edit
                        </button>
                        <button className='py-2 px-4 text-sky-500 border border-sky-500 bg-white rounded hover:text-white hover:bg-sky-500/50'
                            onClick={logoutHandler}>Logout</button>
                    </div>
                    <div className='flex justify-between mt-3'>

                        <div>
                           
                            <span className='font-semibold'>{posts.length}</span>
                            <span className='ml-1'>posts</span>
                            
                        </div>
                        <div className='ml-6'>
                            
                            <span className='font-semibold'>3</span>
                            <span className='ml-1'>followers</span>
                         
                        </div>
                        <div className='ml-6'>
                      
                            <span className='font-semibold'>3</span>
                            <span className='ml-1'>following</span>
                       
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
            <div className='my-2'>
                {usersPost.map(post => <PostCard key={post._id} post={post} />)}
            </div>
        </>
    )
}

export {ProfileCard}