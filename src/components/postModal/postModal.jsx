const PostModal = () => {
    return (
        <>
             <aside className='mt-16 mx-auto  bg-[#0C0F13]  rounded-xl m-10  rounded-md w-full max-w-[35rem] top-[10vh] h-[35vh] rounded'>
            <form className="p-2 flex flex-col">
                <textarea placeholder="What's on your mind"
                    className='" h-36 p-5 resize-none rounded border focus:outline-2 focus:outline-sky-500'></textarea>
                <div className="p-4 content-center">
                    <button className='px-2 py-1 mx-2 text-sky-500 border border-sky-500 bg-white hover:bg-sky-500 hover:text-white rounded hover:transition-all'>Cancel</button>
                <button className='px-2 py-1 bg-sky-500 text-white hover:bg-sky-500/25 rounded hover:transition-all'>Add Post</button>
                </div>
                </form>
        </aside>
        </>
    )
}

export {PostModal}