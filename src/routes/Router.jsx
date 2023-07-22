import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Details from "../pages/Details/Details";
 
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: "/college/:id",
                element: <Details></Details>,
                loader: ({params}) => fetch(`http://localhost:5000/college/${params.id}`)
            }
             
        ]
    }
])

export default router;