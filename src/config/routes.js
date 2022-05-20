import { Login } from "../pages/login/login";
import { Signup } from "../pages/signup/signup";
import { Explore } from "../pages/explore/explore";
import { Notification } from "../pages/notification/notification";
import { Bookmark } from "../pages/bookmark/bookmark";
import { Profile } from "../pages/profile/profile";
import { PrivateRoute } from '../components/privateRoute/privateRoute';
import {SinglePost} from "../pages/singlePost/singlePost"
const routes = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/",
        element: <PrivateRoute />,
        children: [
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/post/:postId",
                element: <SinglePost />,
            },
            {
                path: "/bookmark",
                element: <Bookmark />,
            },
           
            {
                path: "/notifications",
                element: <Notification />,
            },
            {
                path: "/",
                element: <Explore />,
            },
        ]
    }
]
export { routes }