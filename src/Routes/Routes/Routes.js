import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../Pages/Blog/Blog";
import AllCourses from "../../Pages/Courses/AllCourses/AllCourses";
import Checkdetails from "../../Pages/Courses/Checkdetails/Checkdetails";
import Checkout from "../../Pages/Courses/Checkout/Checkout";
import Courses from "../../Pages/Courses/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import NotFound from "../../Pages/NotFound/NotFound";
import Register from "../../Pages/Register/Register";
import Terms from "../../Pages/Terms/Terms";
import PrivateRoute from './../PrivateRoute/PrivateRoute';
export const routes = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>,
                loader:() => fetch(' https://education-online-server.vercel.app/teacher')  
            },
            {
                path:'/courses',
                element:<AllCourses></AllCourses>,
            },
            {
                path:'/courses/:id',
                element:<Courses></Courses>,
                loader:({params}) => fetch(` https://education-online-server.vercel.app/courses/${params.id}`)
            },  
            {
                path:'/checkout',
                element:<Checkdetails></Checkdetails>
            },
            {
                path:'/checkout/:id',
                element:<PrivateRoute><Checkout></Checkout></PrivateRoute>,
                loader:({params}) => fetch(` https://education-online-server.vercel.app/coursesitem/${params.id}`)
            },            
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Register></Register>
            },
            {
                path:"/faq",
                element:<Faq></Faq>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/terms',
                element:<Terms></Terms>
            },
            {
                path:"*",
                element:<NotFound></NotFound>
            }

        ]
    }

])