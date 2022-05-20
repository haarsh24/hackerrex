import { Link } from "react-router-dom"
const Comments = ({ comment,username,
    firstName,
    lastName,
    commentDate,
    profileImage, } ) => {
    return (
        <>
             <div className='flex items-center  bg-[#0C0F13] rounded-2xl p-2 mx-4 my-4'>
            <Link to="/">
                {profileImage ? (<img
                    alt="profile"
                    loading="lazy"
                    src="https://i.pravatar.cc/300"
                    className='w-12 h-12 border rounded-full bg-gray-200 mx-2' />) : (
                    <div className='w-12 h-12 flex items-center justify-center font-semibold text-xl  rounded-full bg-sky-200 mx-2'>
                        {firstName[0].toUpperCase()}
                    </div>
                )}
            </Link>
            <div>
                <div className='flex mr-auto'>
                    <span>{firstName} {lastName}</span>
                    <span>• Few seconds ago</span>
                </div>
                <p>{comment}</p>
            </div>
        </div>
        </>
    )
}

export {Comments}