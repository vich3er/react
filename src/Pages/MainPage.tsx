import UsersComp from "../components/UsersComp.tsx";
import {Outlet} from "react-router-dom";


const MainPage = () => {
    return (
        <div className="flex flex-row gap-40">
         <UsersComp/>
            <Outlet/>
        </div>
    );
};

export default MainPage;