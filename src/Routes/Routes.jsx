import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Signup from "../pages/Signup/Signup";
import CreateAssignment from "../pages/CreateAssignment/CreateAssignment";
import MyAssignments from "../pages/MyAssignments/MyAssignments";
import Assignments from "../pages/Assignments/Assignments";
import View from "../pages/View/View";
import Update from "../pages/Update/Update";
import PrivateRoute from "../Provider/PrivateRoute/PrivateRoute";
import Pending from "../pages/PendingAssignment/pending";
import Error from "../pages/Error/Error";
import AboutUs from "../pages/AboutUs/AboutUs";
import FeatureDetail from "../pages/FeatureDetail/FeatureDetail";
import Groups from "../pages/Groups/Groups";




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
            Component: Assignments
        },
        {
            path: "/aboutus",
            Component: AboutUs
        },
        {
            path: "/createassignment",
            element: <PrivateRoute><CreateAssignment></CreateAssignment></PrivateRoute>
        },
        {
            path: "join/group/:id",
            element: <PrivateRoute><Groups></Groups></PrivateRoute>
        },
        {
            path: "/view/:id",
            loader: ({ params }) => fetch(`https://studysync-server-kappa.vercel.app/assignment/${params.id}`),
            element: <PrivateRoute><View></View></PrivateRoute>
        },
        {
            path: "/update/:id",
            loader: ({ params }) => fetch(`https://studysync-server-kappa.vercel.app/assignment/${params.id}`),
            element: <PrivateRoute><Update></Update></PrivateRoute>
        },
        {
            path: "/feture/:id",
            loader: () => fetch(`feture.json`),
            element: <PrivateRoute><FeatureDetail></FeatureDetail></PrivateRoute>
        },
        {
            path: "/myassignments",
            element: <PrivateRoute><MyAssignments></MyAssignments></PrivateRoute>
        },
        {
            path: "/pending",
            element: <PrivateRoute><Pending></Pending></PrivateRoute>


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
},
{
    path: "*",
    element: <Error />
}
])
