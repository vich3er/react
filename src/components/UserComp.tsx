import   {FC} from 'react';
import {IUser} from "../models/IUser.ts";
import { Link } from 'react-router-dom';
type UserPropType= {
    item: IUser;
}

const UserComp:FC<UserPropType> = ({item}) => {
    return (


        <>
            <li id={item.id} ><Link to={'carts'} state={item}>{item.username}</Link></li>
        </>

    );
};

export default UserComp;