import { Login } from "../pages/login/login";
import { Signup } from "../pages/signup/signup";
import { Explore } from "../pages/explore/explore";
import { Notification } from "../pages/notification/notification";
import { Bookmark } from "../pages/bookmark/bookmark";
import { Profile } from "../pages/profile/profile";
import { PrivateRoute } from '../components/privateRoute/privateRoute';
import {SinglePost} from "../pages/singlePost/singlePost"
import { Feed } from "../pages/feed/feed";
import { Posts } from "../components/posts/posts";
import { Followers } from "../components/followers/followers";
import { Following } from "../components/following/following";

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
                path: "/profile/:userId",
                element: <Profile />,
                children: [
                    {
                        index: true,
                        element: <Posts />
                    },
                    {
                        path: "followers",
                        element: <Followers />,
                    },
                    {
                        path: "following",
                        element: <Following />,
                    },
                ]
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
                path: "/explore",
                element: <Explore />,
            },
            
            {
                path: "/",
                element: <Feed/>,
            },
        ]
    }
]
export { routes }