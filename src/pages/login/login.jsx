import { useDispatch } from "react-redux";
import { Link, useLocation,useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/selectors";
import React, { useEffect, useReducer } from "react";
import { loginFormReducer } from "./loginFormReducer";
import { loginUser } from '../../store/feature/authSlice';
import  socialMedia  from "../../assets/social-media.svg" 


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useAuth();
  const [{ email, password }, loginDispatch] = useReducer(loginFormReducer, {
    email: "",
    pasword: "",
  });

  const testHandler = () => {
    loginDispatch({ type: "SET_EMAIL", payload: "haarshn" });
    loginDispatch({ type: "SET_PASSWORD", payload: "harsh123" });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(loginUser({ username: email, password }));
  };

  useEffect(() => {
    if (user) {
      return navigate(location.state?.from?.pathname || "/", { replace: true });
    }
  }, [user, location, navigate]);
  return (
    <>
      <div className="w-full   flex h-[100vh] py-24 justify-center align-center ">
        <img className="p-6" src={socialMedia}/>
        <form
          className="shadow-md bg-[#141820] rounded-2xl py-8 px-8 pt-6 pb-8 mb-4"
          onSubmit={submitHandler}
        >
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
             Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="text"
              type="text"
              placeholder="Enter Email"
              value={email}
              onChange={(e) =>
                loginDispatch({ type: "SET_EMAIL", payload: e.target.value })
              }
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              value={password}
              onChange={(e) =>
                loginDispatch({ type: "SET_PASSWORD", payload: e.target.value })
              }
              required
            />
          </div>
          <div>
                    <button className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4" onClick={testHandler}>Test credentials</button>
                </div>
          <div>
            <button
              className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Log In
            </button>
          </div>
          <div className="mt-4">
            Don't have an account yet?{" "}
            <Link to="/signup" className="text-indigo-500 hover:text-indigo-700">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export { Login };
