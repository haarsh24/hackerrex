import profileImage2 from "../../assets/avatar-2.jpg"
const ProfileCard = () => {
    return (
        <>
            <div>
                
            </div>
            <div className='flex items-center'>

                <img
                    alt="profile"
                    loading="lazy"
                    src={profileImage2}
                    className='mr-4 w-32 h-32  rounded-full  ml-2' />
                <div className="flex flex-col">
                <div className='flex flex-col py-4 '>
                    <div className='flex items-center'>
                        <div className="flex flex-col">
                        <p className='mr-4'>Kumar Harsh</p>
                            <p className='mr-4'>@harsh</p>
                            </div>
                       </div>
                    <div className='flex justify-between mt-3'>
                        <div>
                            <span>3</span>
                            <span className='ml-1'>Posts</span>
                        </div>
                        <div className='ml-6'>
                            <span>3</span>
                            <span className='ml-1'>Followers</span>
                        </div>
                        <div className='ml-6'>
                            <span>3</span>
                            <span className='ml-1'>Following</span>
                        </div>

                    </div>
                    <div className='mt-3'>
                        <p>Fighting For Glory</p>
                        <p>Tech Enthusiast</p>
                       
                    </div>
                    
                </div>

                <div className="flex py-3">
                    <button className='py-1 px-4 mr-4 bg-sky-500 text-white rounded hover:bg-sky-500/50'>Edit</button>
                    <button className='py-1 px-4 text-sky-500 border border-sky-500 bg-white rounded hover:text-white hover:bg-sky-500/50'>Logout</button>
                    
                </div>
                    </div>
            </div>
        </>
    )
}

export {ProfileCard}