
import {Link, Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <div>
            <ul>
                <li><Link to={'login'}>login</Link></li>
                <li><Link to={'products'}>prod</Link></li>
                <li><Link to={''}>home</Link></li>
            </ul>
            <hr/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;