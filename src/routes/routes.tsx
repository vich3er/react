import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../lay/MainLayout.tsx";
import ProductsPage from "../comp/ProductsPage.tsx";
import HomePage from "../comp/HomePage.tsx";
import LoginPage from "../comp/LoginPage.tsx";

export const routes = createBrowserRouter([
    {
        path: "/", element: <MainLayout/>,
        children : [
            {index: true, element: <HomePage/>},
            {path: 'login', element: <LoginPage/>},
            {path: 'products', element: <ProductsPage/>}
        ]
    }

])