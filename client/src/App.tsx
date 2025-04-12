import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import HomePage from "./components/index";
import HomePageContent from "./components/homepage/homepageContent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [
            {
                path: "",
                element: <HomePageContent />,
            }
        ]
    },
]);

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;
