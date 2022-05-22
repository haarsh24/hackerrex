import {useSelector} from "react-redux";
export const useAuth =()=> useSelector((state)=>state.user);
export const usePost = () => useSelector((state) => state.posts);
export const useModal = () => useSelector((state) => state.modal);
export const useProfile = () => useSelector((state) => state.profile);
export const useUser = () => useSelector((state) => state.users)