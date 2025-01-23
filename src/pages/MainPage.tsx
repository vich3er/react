
import {Outlet} from "react-router-dom";

const MainPage = () => {
    return (
        <div>
          Main page
            <Outlet/>
        </div>
    );
};

export default MainPage;