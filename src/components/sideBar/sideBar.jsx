import logo from "../../assets/hacker-1.png";
import { sidebarData } from "../../data/sideBarData.js";

const SideBar = () => {
    return (
      <aside className='hidden bg-[#141820]  rounded-xl justify-self-start mx-auto md:block  p-4 sticky w-full max-w-[15rem] top-[10vh] h-[60vh] rounded'>
         <div className="flex items-center">
            <img src={logo} className="w-16" />
                <span className=" title text-3xl text-white ">
                     HackerRex
                </span>
                </div>
            <ul className=''>
                {sidebarData.map(({ name, icon, path }) =>
                (<li className='px-2 py-3 flex items-center'
                    key={name}>
                    
                        <span className='material-icons'>
                            {icon}
                        </span>
                        <span className='ml-4'>{name}</span>
                    
                </li>)
                )}
            </ul>
        </aside>
    )
}

export {SideBar}