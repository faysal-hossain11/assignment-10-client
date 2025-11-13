import { createBrowserRouter } from "react-router";
import Root from "../RootLayout/Root";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MyListing from "../pages/MyListing";
import PrivateRoute from "./PrivateRoute";
import AddListing from "../pages/AddListing";
import PetsSupplies from "../pages/PetsSupplies";
import ListingDetails from "../pages/ListingDetails";
import MyOrder from "../pages/MyOrder";
import NotFoundPage from "../pages/NotFoundPage";

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
                path: '/pets-supplies',
                Component: PetsSupplies,
                loader: () => fetch('http://localhost:3000/all-listings').then(res => res.json())
            },
            {
                path: '/my-listings',
                element: (
                    <PrivateRoute>
                        <MyListing />
                    </PrivateRoute>
                )
            },
            {
                path: '/add-listing',
                element: (
                    <PrivateRoute>
                        <AddListing />
                    </PrivateRoute>
                )
            },
            {
                path: '/my-orders',
                element: (
                    <PrivateRoute>
                        <MyOrder />
                    </PrivateRoute>
                )
            },
            {
                path: '/listing-details/:id',
                element: (
                    <PrivateRoute>
                        <ListingDetails />
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
            },
            {
                path: '*',
                Component: NotFoundPage
            }
        ]
    }
])