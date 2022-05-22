import { useAuth } from '../../hooks/selectors';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify';
import { editUser } from '../../store/feature/authSlice';
import { closeModal } from '../../store/feature/modalSlice'
const ProfileModal = () => {
    const dispatch = useDispatch();
    const { user } = useAuth();
    const { firstName, lastName, username, bio, websiteUrl, profileImage } = user ?? {};
    const [editFirstName, setEditFirstName] = useState(firstName || "");
    const [editLastName, setEditLastName] = useState(lastName || "");
    const [editBio, setEditBio] = useState(bio || "");
    const [editWebsiteUrl, setEditWebsiteUrl] = useState(websiteUrl || "");
    const [editProfileImage, setEditProfileImage] = useState(profileImage || null)


    const profileImageHandler = async (files) => {
        try {
            const formData = new FormData();
            formData.append("file", files[0])
            formData.append("upload_preset", process.env.REACT_APP_UPLOAD_PRESET_NAME);
            const response = await fetch(
                `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
                {
                    method: "POST",
                    body: formData,
                }
            );
            const { url, original_filename } = await response.json();
            setEditProfileImage({ url, original_filename });
        } catch (error) {
            toast.error("image not uploaded.")
        }
    }
    const profileSubmitHandler = (e) => {
        e.preventDefault();

        const userData = {
            firstName: editFirstName,
            lastName: editLastName,
            bio: editBio,
            websiteUrl: editWebsiteUrl,
            profileImage: editProfileImage,
        };
        dispatch(editUser({ userData }));
        dispatch(closeModal());
    };
    return (
        <div className='flex justify-center fixed top-0 bottom-0  right-0 left-0 h-screen w-screen z-10 backdrop-blur-[1px] '>

            <aside className=' bg-[#141820]  rounded-2xl flex flex-col justify-center fixed  w-screen z-10  fixed p-4   top-[10vh] max-w-sm'>

                <div className='flex'>
                    <h2>Edit Profile</h2>
                    <button
                        className='ml-auto'
                        onClick={() => dispatch(closeModal())}>
                        <span className="material-icons">
                            close
                        </span>
                    </button>
                </div>
                <div className='w-16 h-16 inline-block relative flex items-center justify-center self-center font-semibold text-xl border rounded-full bg-sky-200'>
                    <label className=' cursor-pointer'>
                        {editProfileImage ? (<img
                            alt={editProfileImage.original_filename}
                            loading="lazy"
                            src={editProfileImage.url}
                            className='w-16 h-16 border rounded-full inline-block bg-gray-200' />) : (<>{firstName[0].toUpperCase()} </>)}
                        <span className="material-icons  inline-block absolute bottom-1 -right-2 select-none  rounded-full hover:cursor-pointer text-2xl text-sky-500 ">
                            add_a_photo
                        </span>
                        <input
                            type="file"
                            className="invisible w-0 p-0"
                            onChange={(e) => profileImageHandler(e.target.files)} />
                    </label>
                </div>
                <form
                    className="bg-[#141820]  shadow-md rounded-2xl px-8 pt-6 pb-8 mb-4"
                    onSubmit={profileSubmitHandler}
                >
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="firstname">
                            Firstname
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="firstname"
                            type="text"
                            placeholder="Firstname"
                            value={editFirstName}
                            onChange={(e) => setEditFirstName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="lastname">
                            Lastname
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="lastname"
                            type="text"
                            placeholder="Lastname"
                            value={editLastName}
                            onChange={(e) => setEditLastName(e.target.value)}
                            required />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="website">
                            Website
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="website"
                            type="text"
                            placeholder="Enter website"
                            value={editWebsiteUrl}
                            onChange={(e) => setEditWebsiteUrl(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label
                            className="block text-gray-700 text-sm font-bold mb-2"
                            htmlFor="bio">
                            Bio
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="bio"
                            type="text"
                            placeholder="Enter bio"
                            value={editBio}
                            onChange={(e) => setEditBio(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <button
                            className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </aside>
        </div>
    )
}

export { ProfileModal }