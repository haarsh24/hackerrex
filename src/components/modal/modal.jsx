import { PostModal } from '../postModal/postModal';
import { ProfileModal } from '../profileModal/profileModal';
import { useModal } from '../../hooks/selectors'
import { closeModal } from '../../store/feature/modalSlice'
import React, { useEffect } from 'react'
const Modal = () => {
    const { isShow, type } = useModal();
    useEffect(() => {
        if (isShow) {
            document.body.style.overflow = "hidden";
            window.scrollTo(0, 0);
        } else {
            document.body.style.overflow = "";
        }
    }, [isShow]);

    // const handleClick = (e) =>
    //     e.target === e.currentTarget && dispatch(closeModal());

    if (!isShow) return null;
    return (
        <>
             <div>
             {type === "post" && <PostModal />}
            {type === "profile" && <ProfileModal />}
        </div>
        </>
    )
}

export {Modal}