import profileImage from "../../assets/avatar-1.jpg"
import postImage from "../../assets/avatar-4.jpg"
import { useAuth ,useModal} from '../../hooks/selectors';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { showModal } from '../../store/feature/modalSlice';
import { deletePost, editPost } from '../../store/feature/postSlice';
const PostCard = ({post}) => {
    const [showDropDown, setShowDropDown] = useState(false);
    const { user } = useAuth();
    const dispatch = useDispatch();
    const { _id, content, firstName, lastName, username, profileImage, mediaContent } = post;
    const editPostHandler = () => {
        dispatch(showModal(post));
        setShowDropDown(false)
    }
    const deletePostHandler = () => {
        dispatch(deletePost(_id))
    }
    return (
        <article className="bg-[#0C0F13]  rounded-xl  rounded mb-5  mx-4 lg:mx-0 md:mr-6">
            <section className="flex py-2">
            <Link to="/">
                    {profileImage ? (<img
                        alt="profile"
                        loading="lazy"
                        src={profileImage}
                        className='w-12 h-12 rounded-full  mx-5' />) : (
                        <div className='w-12 h-12 flex items-center justify-center font-semibold text-xl border rounded-full bg-sky-200 mx-5'>
                            {firstName[0].toUpperCase()}
                        </div>
                    )}
                </Link>
                    
                <div className='flex flex-col mr-auto'>
                <span>{firstName} {lastName}</span>
                    <div className='flex'>
                        <span className='mr-2'>@{username}</span>
                        <span>10 days ago</span>
                    </div>
                </div>
                {username === user?.username && <div className='relative'>
                    <button
                        className='mr-3 w-10 h-10 flex justify-center items-center hover:text-sky-50 hover:bg-sky-500/25 rounded-full'
                        onClick={() => setShowDropDown(pre => !pre)}>
                        <span className="material-icons">
                            more_horiz
                        </span>
                    </button>
                    {showDropDown && (
                        <div className='absolute right-0 mx-2 bg-slate-50 px-4 py-2 rounded min-w-max w-32'>
                            <button
                                className='w-full py-1 rounded hover:text-sky-500'
                                onClick={editPostHandler}>Edit</button>
                            <button
                                className='w-full py-1 rounded hover:text-sky-500'
                                onClick={deletePostHandler}>Delete</button>
                        </div>
                    )}
                </div>}
            </section>
            <div className='my-2'>
                {mediaContent &&
                    <Link to="/">
                        <img
                            loading="lazy"
                            src={mediaContent.url}
                            alt={mediaContent.name}
                            className='w-full border bg-gray-200' />
                    </Link>}
            </div>

            <p className="py-2 px-5 text-sm lg:text-base cursor-pointer mb-2">
                {content}
            </p>
                {/* <button className='mr-3 w-10 h-8 flex justify-center items-center hover:text-sky-50 hover:bg-sky-500/25 rounded-full'>
                    <span className="material-icons">
                        more_horiz
                    </span>
                </button>
            </section>
            <div className='my-1'>
                <Link to="/">
                    <img
                        alt="profile"
                        loading="lazy"
                        src={postImage}
                        className=' rounded-l' />
                </Link>
            </div>
            <p className="py-1 px-5 text-sm lg:text-base cursor-pointer ">
                Whatever comes in the way , take it with the smile .
            </p> */}
            <div className='flex justify-between py-1 mx-5'>
            <div className=''>
                    <button className='w-10 h-10 flex justify-center items-center hover:text-sky-50 hover:bg-sky-500/25 rounded-full'>
                        <span className="material-icons">
                            favorite_border
                        </span>
                    </button>
                </div>
                <div>
                    <button className='w-10 h-10 flex justify-center items-center hover:text-sky-50 hover:bg-sky-500/25 rounded-full'>
                        <span className="material-icons">
                            chat_bubble_outline
                        </span>
                    </button>
                </div>
                <button className='w-10 h-10 flex justify-center items-center hover:text-sky-50 hover:bg-sky-500/25 rounded-full'>
                    <span className="material-icons">
                        bookmark_border
                    </span>
                </button>
                </div>
       </article> 
    )
}

export {PostCard}