import   {FC} from 'react';
import {IUser} from "../models/IUser.ts";
import { Link } from 'react-router-dom';
type UserPropType= {
    item: IUser;
}

const UserComp:FC<UserPropType> = ({item}) => {
    return (
        <div>
            <ul>
            <li><Link to={'carts'} state={item}>{item.username}</Link></li>
            </ul>
            </div>
    );
};

export default UserComp;