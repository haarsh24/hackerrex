import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeModal } from '../../store/feature/modalSlice'
import reactDom from "react-dom";
import { addPost, editPost } from '../../store/feature/postSlice';
import { useAuth,useModal } from '../../hooks/selectors';
import axios from 'axios';
import { toast } from 'react-toastify';
const PostModal = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const { currentPost } = useModal();
    const [content, setContent] = useState("");
    const [mediaContent, setMediaContent] = useState(null);
    const postLimit = 200;
    useEffect(() => {
        if (currentPost) {
            setContent(currentPost?.content);
            const url = currentPost?.mediaContent?.url;
            const name = currentPost?.mediaContent?.name;
            setMediaContent({ url, name });
        }
    }, [currentPost])
    const uploadImage = async (files) => {
        try {
            const formData = new FormData();
            formData.append("file", files[0])
            formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET_NAME)
            const response = await fetch(
                `https://api.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            const { url, name } = await response.json();
            setMediaContent({ url, name })
        } catch (error) {
            toast.error("Image not uploaded.")
        }
    }
    const submitHandler = (e) => {
        e.preventDefault();
        if (currentPost) {
            dispatch(editPost({
                _id: currentPost._id,
                content: content,
            }))
        } else {
            const { firstName, lastName } = user;
            const postDetails = {
                firstName,
                lastName,
                content: content,
                mediaContent,
            }
            dispatch(addPost(postDetails));
        }
       
    }
    return (
        <>
            <aside className='mt-14  mx-auto  bg-[#0C0F13]  rounded-xl m-10  rounded-md w-full max-w-[35rem] top-[10vh] h-[35vh] rounded'>
                <form
                    onSubmit={submitHandler}
                    className='p-2 flex flex-col'>
                    <textarea
                        placeholder="What's on your mind ?"
                        className='w-full h-36 p-3 m-1  bg-[#141820] resize-none rounded border focus:outline-2 focus:outline-sky-500 mx-auto'
                        maxLength={postLimit}
                        onChange={(e) => setContent(e.target.value)}
                        value={content}></textarea>
                    {
                        mediaContent && (
                            <img
                                loading='lazy'
                                src={mediaContent.url}
                                alt={mediaContent.name}
                                className='w-64 mx-auto h-32 object-contain' />
                        )
                    }
                    <div className='flex items-center justify-between'>
                        <label
                            className="tooltip flex items-center"
                        >
                            <span className=" select-none w-10 h-10 flex items-center justify-center rounded-full hover:cursor-pointer text-2xl text-sky-500 hover:bg-sky-700">
                                
                            </span>
                            <input
                                type="file"

                                className="invisible w-0 p-0"
                                onChange={(e) => uploadImage(e.target.files)}
                            />
                        </label>
                        <span
                            className={`${content.length === postLimit
                                ? "text-blue-500"
                                : "text-gray-500"
                                } text-xs text-center self-center w-[5rem] md:text-sm font-semibold mx-1`}
                        >
                            {content.length} / {postLimit}
                        </span>
                        <button
                            className='px-2 py-1 mx-2 text-sky-500 border border-sky-500 bg-white hover:bg-sky-500 hover:text-white rounded hover:transition-all'
                            type="button"
                            onClick={() => dispatch(closeModal())}>
                            Cancel
                        </button>
                        <button
                            disabled={content.length === 0 && !mediaContent}
                            className={`${content.length === 0 && !mediaContent && "opacity-50"} px-2 py-1 bg-sky-500 text-white hover:bg-sky-500/25 rounded hover:transition-all`}>
                            {currentPost ? "Update" : "Add Post"}
                        </button>
                    </div>
                </form>
            </aside>
        </>
    )
}

export {PostModal}