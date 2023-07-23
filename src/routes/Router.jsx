import {  createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Details from "../pages/Details/Details";
import Research from "../pages/Home/Research/Research";
import AllCollege from "../pages/AllCollege/AllCollege";
import Addmission from "../pages/Addmission/Addmission";
import Form from "../pages/Form/Form";
import MyCollege from "../pages/MyCollege/MyCollege";
import Review from "../pages/Review/Review";
import ReviewSection from "../pages/Home/ReviewSection/ReviewSection";
 
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
            },
            {
                path: '/research',
                element: <Research></Research>
            },
            {
                path: '/allcollege',
                element: <AllCollege></AllCollege>
            },
            {
                path: '/addmission',
                element: <Addmission></Addmission>
            },
            {
                path: '/form/:id',
                element: <Form></Form>,
                loader: ({params}) => fetch(`http://localhost:5000/college/${params.id}`)
                 
            },
            {
                path: '/mycollege',
                element: <MyCollege></MyCollege>
            },
            {
                path: "/review",
                element: <Review></Review>
            },
            {
                path: '/reviewsection',
                element: <ReviewSection></ReviewSection>
            }
             
        ]
    }
])

export default router;