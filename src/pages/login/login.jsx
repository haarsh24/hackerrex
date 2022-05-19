import { Link } from "react-router-dom"
const Login = () => {
    return (
        <>
            <div className="w-full h-full  flex h-[100vh] py-24 justify-center align-center ">
            <form className="shadow-md bg-[#141820] rounded-xl py-8 px-8 pt-6 pb-8 mb-4">
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                        Email
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Enter Email" />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" />
                </div>

                <div>
                    <button className="bg-sky-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
                        Log In
                    </button>
                </div>
                <div className='mt-4'>Don't have an account yet? <Link to="/signup" className='text-sky-500 hover:text-sky-700'>Signup</Link></div>
            </form>
        </div>
        </>
    )
}

export {Login}