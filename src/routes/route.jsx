import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MyListing from "../pages/MyListing";
import PrivateRoute from "./PrivateRoute";
import AddListing from "../pages/AddListing";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: Root,
        children: [
            {
                index: true,
                path: '/',
                Component: Home,
            },
            {
                path: '/latest-listings',
                element: (
                    <PrivateRoute>
                        <MyListing />
                    </PrivateRoute>
                )
            },
            {
                path: 'add-listing',
                element: (
                    <PrivateRoute>
                        <AddListing />
                    </PrivateRoute>
                )
            },
            {
                path: '/login',
                Component: Login
            },
            {
                path: '/register',
                Component: Register
            }
        ]
    }
])