
import Menu from "../components/Menu/Menu.tsx";
import {Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div>
           <Menu/>
            <Outlet/>
        </div>
    );
};

export default Layout;