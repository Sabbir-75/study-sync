import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import MyAssignments from "../pages/MyAssignments/MyAssignments";
import Assignments from "../pages/Assignments/Assignments";
import PrivateRoute from "../Provider/PrivateRoute/PrivateRoute";
import View from "../pages/View/View";


export const router = createBrowserRouter([{
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: "/assignments",
            loader: () => fetch("http://localhost:5000/assignments"),
            Component: Assignments
        },
        {
            path: "/createassignment",
            Component: CreateAssignment
        },
        {
            path: "/view/:id",
            loader: ({params}) => fetch(`http://localhost:5000/assignment/${params.id}`),
            Component: View
        },
        {
            path: "/myassignments",
            Component: MyAssignments
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