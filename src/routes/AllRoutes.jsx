import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import SignIn from "../pages/sharedPage/SignIn";
import SignUp from "../pages/sharedPage/SignUp";
import ErrorPage from "../components/ErrorPage";
import Profile from "../pages/profile/Profile";
import PrivateRoute from "./PrivateRoute";
import CreatePost from "../pages/createPost/CreatePost";
import Reels from "../pages/reels/Reels";



const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/profile',
                element:<PrivateRoute><Profile></Profile></PrivateRoute>
            },
            {
                path:'/create-post',
                element:<PrivateRoute><CreatePost></CreatePost></PrivateRoute>
            },
            {
                path:'/reels',
                element:<Reels></Reels>
            },
         
            
        ]
    },
    {
        path:'/signIn',
        element:<SignIn></SignIn>
    },
    {
        path:'/signUp',
        element:<SignUp></SignUp>
    }, 
    {
        path:'/*',
        element:<ErrorPage></ErrorPage>
    }, 

   
 
 
])





const AllRoutes = () => {
    return (
        <RouterProvider router={router}></RouterProvider>
    );
};

export default AllRoutes;