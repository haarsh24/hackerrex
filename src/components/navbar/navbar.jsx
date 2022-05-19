
import "./navbar.css"
import { Link } from "react-router-dom"
import profileImage from "../../assets/avatar-1.jpg"
const Navbar = () => {
    return (
        <nav className='fixed w-full bg-[#141820] py-1 lg:px-80 md:px-40 px-20 flex flex-row top-0 h-15 items-center  '>
        <div className='mr-auto'>
            <Link to="/">
                <span className="title text-3xl text-white ">
                   HackerRex
                </span>
            </Link>
        </div>
        <div className='flex px-2 '>
            
            <Link to="/profile">
                <img
                    alt="profile"
                    loading="lazy"
                    src={profileImage}
                    className='w-10 h-10 m-1 rounded-full ' />
                </Link>
          
        </div>
    </nav>
    )
}
export {Navbar}