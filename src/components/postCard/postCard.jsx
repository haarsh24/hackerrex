import { Link } from "react-router-dom";
import profileImage from "../../assets/avatar-1.jpg"
import postImage from "../../assets/avatar-4.jpg"
const PostCard = () => {
    return (
        <article className="bg-[#0C0F13]  rounded-xl  rounded mb-5  mx-4 lg:mx-0 md:mr-6">
            <section className="flex py-2">
                    <img
                        alt="profile"
                        loading="lazy"
                        src={profileImage}
                    className='w-12 h-12 rounded-full  mx-5' />
                <div className='flex flex-col mr-auto'>
                    <span>Kumar Harsh</span>
                    <span>6 Days ago</span>
                </div>
                <button className='mr-3 w-10 h-8 flex justify-center items-center hover:text-sky-50 hover:bg-sky-500/25 rounded-full'>
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
            </p>
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