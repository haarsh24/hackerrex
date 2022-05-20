import { sidebarData } from "../../data/sideBarData";
import {NavLink} from "react-router-dom"
const BottomNav = () => {
    return (
        <div className='fixed  bg-[#141820] bottom-0 left-0 right-0 md:hidden rounded'>
        <ul className='flex justify-around'>
            {sidebarData.map(({ name, icon, path }) =>
            (<li className='px-2 py-3 flex'
                key={name}>
                <NavLink
                    to={path}
                    title={name}
                    className={({ isActive }) =>
                        `${isActive ? " text-sky-50" : ""
                        } flex w-full items-center bg-zinc rounded hover:text-sky-50 hover:bg-sky-500 rounded`
                    }
                >
                    <span className='material-icons'>
                        {icon}
                    </span>
                </NavLink>


            </li>)
            )}
        </ul>
    </div>
    
    )
}

export {BottomNav}