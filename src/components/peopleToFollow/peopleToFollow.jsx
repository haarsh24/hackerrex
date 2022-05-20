import profileImage from "../../assets/avatar-3.jpg"
import profileImage2 from "../../assets/avatar-2.jpg"

const PeopleToFollow = () => {
    return (
        <>
             <aside className='hidden bg-[#141820] rounded-2xl lg:block lg:right-aside sticky top-[10vh] my-14 max-w-[20rem] mx-auto w-full rounded h-max py-3'>
            <div className='mt-2 ml-4 text-xl font-semibold'>
               People to follow?
                </div>
                {/* <div className='flex  mt-4'> */}
                <div className='flex mt-4'>
                       
                       <img
                           alt="profile"
                           loading="lazy"
                           src={profileImage}
                           className='mr-4 w-12 h-12  rounded-full bg-gray-200 ml-5' />
                       <div className='flex flex-col mr-auto'>
                           <p>Kumar Harsh</p>
                           <p>@harsh</p>
                       </div>
                       <button className='mr-4 text-sky-500 hover:text-sky-700'>Follow</button>
                   </div>
              <div className='flex mt-4'>
                       
                <img
                    alt="profile"
                    loading="lazy"
                    src={profileImage2}
                    className='mr-4 w-12 h-12  rounded-full bg-gray-200 ml-5' />
                <div className='flex flex-col mr-auto'>
                    <p>Bruce Wayne</p>
                    <p>@bruce</p>
                </div>
                <button className='mr-4 text-sky-500 hover:text-sky-700'>Follow</button>
            </div>
            {/* </div> */}
            </aside>
        </>
    )
}

export {PeopleToFollow}