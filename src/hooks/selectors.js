import {useSelector} from "react-redux";
export const useAuth =()=> useSelector((state)=>state.user);
export const useModal = () => useSelector((state) => state.modal);
export const usePost = () => useSelector((state) => state.posts);