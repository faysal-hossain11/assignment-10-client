import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Bids from "../pages/Bids";
import Register from "../pages/Register";
import Login from "../pages/Login";

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
                path: '/products',
                Component: Products
            },
            {
                path: '/bids',
                Component: Bids
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