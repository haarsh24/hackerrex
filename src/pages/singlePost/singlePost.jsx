import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams,Link } from "react-router-dom";
import { useAuth , usePost } from "../../hooks/selectors";
import { postComment } from '../../store/feature/postSlice';
import { SideBar } from "../../components/sideBar/sideBar";
import { BottomNav } from "../../components/navbar/bottomNav";
import { PostCard } from "../../components/postCard/postCard";
import { Comments } from "../../components/comments/comments";
const SinglePost = () => {
    const [comment, setComment] = useState("");
    const { user } = useAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { firstName } = user;
    const { postId } = useParams();
    const { posts } = usePost();
    const post = posts.find(post => post._id === postId)
    console.log(comment);
    const profileImage = false;
    const commentSubmitHandler = (e) => {
        e.preventDefault();
        dispatch(postComment({ postId, comment }))
        setComment("")
    }

    return (
        <>
           <div className='grid lg:grid-cols-3 mt-14 h-[100vh] md:grid-cols-2 grid-cols-1'>
            <SideBar />
            <BottomNav />
                <main className=" py-14">
                    <PostCard post={post} />
                    {post && <form
                    onSubmit={commentSubmitHandler}
                    className='flex items-center'
                >
                    <Link to="/">
                        {profileImage ? (<img
                            alt="profile"
                            loading="lazy"
                            src="https://i.pravatar.cc/300"
                            className='w-12 h-12 border rounded-full bg-gray-200 mx-5' />) : (
                            <div className='w-12 h-12 flex items-center justify-center font-semibold text-xl border rounded-full bg-indigo-200 mx-5'>
                                {firstName[0].toUpperCase()}
                            </div>
                        )}
                        </Link>
                        
                        
                    
                    <input className='w-full h-10 border-1 border-indigo-500 border-solid rounded p-2 ml-2 shadow-md resize-none dark:text-white dark:bg-slate-700 focus:outline-none'
                        type="text"
                        placeholder='Add your comments here'
                        id="comment"
                        name="comment"
                        value={comment}
                            onChange={(e) => setComment(e.target.value)} />
                        <button
                        disabled={!comment}
                        className={`${comment ? "bg-indigo-500" : "bg-indigo-500/25"}  text-white mx-2  px-4 py-2 rounded`}>Post</button>
                    
                   
                    </form>}
                {post.comments.length > 0 &&
                    post.comments.map((comment) => (
                        <Comments key={comment._id} {...comment} />
                    ))
                }
                </main> 
                </div>
        </>
    )
}

export { SinglePost }
