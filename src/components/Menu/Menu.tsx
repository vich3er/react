
import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul className="flex flex-row  bg-amber-300 gap-1">
                <li><Link to={'users'}>users</Link></li>
                <li><Link to={'posts'}>posts</Link></li>
                <li><Link to={''}>home</Link></li>
            </ul>
        </div>
    );
};

export default Menu;