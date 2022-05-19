import logo from "../../assets/hacker-1.png";
import { sidebarData } from "../../data/sideBarData.js";
import { NavLink } from "react-router-dom";
const SideBar = () => {
    return (
      <aside className='hidden bg-[#141820]  rounded-xl my-14 justify-self-start mx-auto md:block  p-4 sticky w-full max-w-[16rem] top-[10vh] h-[60vh] rounded'>
         <div className="flex items-center">
            <img src={logo} className="w-16" />
                <span className=" title text-3xl text-white ">
                     HackerRex
                </span>
                </div>
                <ul className=''>
                {sidebarData.map(({ name, icon, path }) =>
                (<li className='px-2 py-1 my-2 flex items-center'
                    key={name}>
                    <NavLink
                        to={path}
                        title={name}
                        className={({ isActive }) =>
                            `${isActive ? " text-sky-50" : ""
                            } p-2 flex w-full items-center rounded hover:text-sky-50 hover:bg-sky-500 rounded `
                        }
                    >
                        <span className='material-icons'>
                            {icon}
                        </span>
                        <span className='ml-4'>{name}</span>
                    </NavLink>
                </li>)
                )}
            </ul>
        </aside>
    )
}

export {SideBar}