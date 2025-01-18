import   {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser.ts";
import {userService} from "../../services/api-servise.ts";
import UserComponent from "./UserComponent.tsx";

const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    useEffect(() => {
        userService.getUsers().then(res=>setUsers(res))
    }, [])
    return (
        <div>
            {
                users.map((user) => <UserComponent item={user} key={user.id}/>)
            }
        </div>
    );
};

export default UsersComponent;