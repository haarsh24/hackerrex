import { Login, Profile, Signup, Explore, Notification, Bookmark } from "pages"

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