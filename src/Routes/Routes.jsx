import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";


export const router = createBrowserRouter([{
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "/createassignment",
            Component: CreateAssignment
        },
        {
            path: "/login",
            Component: Login
        },
        {
            path: "/signup",
            Component: Signup
        },
    ]
}])