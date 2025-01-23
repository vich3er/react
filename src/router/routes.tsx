import {createBrowserRouter} from "react-router-dom";
import MainPage from "../pages/MainPage.tsx";
import PaginationComp from "../components/paginaton/PaginationComp.tsx";
import UsersComp from "../components/UsersAndUser/UsersComp.tsx";


export const routes = createBrowserRouter([
    {path: '/', element: <MainPage/>, children: [
            {
                path: '', element: <PaginationComp/>, children: [
                    { path: '', element: <UsersComp/>}
                ]
            }
        ]}
])