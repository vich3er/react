import {useEffect, useState} from 'react';
import {IUser} from "../models/IUser.ts";
import {usersServise} from "../servise/api-sercvise.ts";
import UserComp from "./UserComp.tsx";

const UsersComp = () => {

    const [users, setUsers] =  useState<IUser[]>([]);
    useEffect(() => {
        usersServise.getAllUsers().then(users => setUsers(users))
    }, []);

    return (
        <div>
            {
                users.map(user => <UserComp item={user} key={user.id}/>)
            }
            </div>
    );
};

export default UsersComp;