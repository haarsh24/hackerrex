import { Login } from "../pages/login/login";
import { Signup } from "../pages/signup/signup";
import { Explore } from "../pages/explore/explore";
import { Notification } from "../pages/notification/notification";
import { Bookmark } from "../pages/bookmark/bookmark";
import { Profile } from "../pages/profile/profile";


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
        path: "/profile",
        element: <Profile />,
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
export { routes }