import {createBrowserRouter} from "react-router-dom";
import MainPage from "../Pages/MainPage.tsx";
import CartsComp from "../components/CartsComp.tsx";

export const routes = createBrowserRouter(
    [
        {path: '', element: <MainPage/>},
        { path: 'carts/:userId', element: <CartsComp/>
                }


    ]
)