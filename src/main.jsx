import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/account/Login";
import Register from "./pages/account/Register";
import LostPassword from "./pages/account/LostPassword";
import Panel from "./pages/adm/Panel";
import User from "./pages/User";
import Game from "./pages/Game";
import ShoppingCart from "./pages/ShoppingCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "account",
        children: [
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "lost-password",
                element: <LostPassword />,
            },
        ],
    },
    {
        path: "adm",
        children: [
            {
                path: "panel",
                element: <Panel />,
            },
        ],
    },
    {
        path: "user",
        element: <User />,
    },
    {
        path: "game/:slug",
        element: <Game />,
    },
    {
        path: "shopping-cart",
        element: <ShoppingCart />,
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
