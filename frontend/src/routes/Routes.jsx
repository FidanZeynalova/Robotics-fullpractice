import Add from "../pages/Add";
import Detail from "../pages/Detail";
import Main from "../pages/Main";
import Notfound from "../pages/Notfound";
import Root from "../pages/Root";
import Wishlist from "../pages/Wishlist";


export const ROUTES = [
    {
        path: "/",
        element: <Root />,
        children: [
            {
                path: "/",
                element: <Main />
            },
            {
                path: "/add",
                element: <Add />
            },
            {
                path: "/wishlist",
                element: <Wishlist />
            },
            {
                path: "/:id",
                element: <Detail />
            },
            {
                path: "*",
                element: <Notfound />
            }
        ]
    }
]