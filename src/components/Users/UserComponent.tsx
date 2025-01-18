import  {FC} from 'react';
import {IUser} from "../../models/IUser.ts";

interface UserPropType {
    item: IUser
}

const UserComponent:FC<UserPropType> = ({item}) => {
    return (
        <div>
            {
                item.username
            }
        </div>
    );
};

export default UserComponent;