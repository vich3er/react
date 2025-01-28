
import {Link, Outlet} from "react-router-dom";

const  App = () => {
    return (
        <div>
            <ul className='bg-amber-300'>
                <li><Link to={"cars"}>Переглянути машини</Link></li>
                <li><Link to={"create-car"}>Додати машину</Link></li>
            </ul>
            <Outlet/>
        </div>
    );
};

export default  App;