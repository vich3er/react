import {createBrowserRouter} from "react-router-dom";
import Layout from "../components/Layout.tsx";
import CreateCar from "../components/CreateCar.tsx";
import ShowCarsPage from "../Pages/ShowCarsPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <Layout/>, children: [
            {path: "cars", element: <ShowCarsPage/>},
            {
                path: "create-car", element: <CreateCar/>
            }
        ]
    }
])