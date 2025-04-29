import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import AboutMe from "../pages/AboutMe";
import MainLayout from "../layouts/MainLayout";
import Skills from "../pages/Skills";


 const router = createBrowserRouter([
    {
        errorElement: <Navigate to="/" />
    },
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: "about",
                element: <AboutMe />
            },
            {
                path: "skills",
                element: <Skills />
            }
        ]
    }
]);

export default router;