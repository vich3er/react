import {createBrowserRouter} from "react-router-dom";
import HomePage from "../pages/HomePage.tsx";
import UsersPage from "../pages/UsersPage.tsx";
import PostsPage from "../pages/PostsPage.tsx";
import Layout from "../layout/Layout.tsx";





export const routes = createBrowserRouter([
    {path: '', element: <Layout/>, children:[
            {path:'users', element: <UsersPage/> },
            {path: 'posts', element: <PostsPage/>},
            { index: true, element: HomePage()}
        ] }
])