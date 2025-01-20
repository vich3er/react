import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {RouterProvider} from "react-router-dom";
import {routes} from "./router/routes.tsx";

createRoot(document.getElementById('root')!).render(

    <RouterProvider router={routes}/>

)
