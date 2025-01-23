import {useEffect, useState} from 'react';
import {IUser} from "../../models/IUser.tsx";
import {useSearchParams} from "react-router-dom";
import {getUsers} from "../../servise/api-servise.ts";
import {ApiRes} from "../../models/ApiRes.ts";

const UsersComp = () => {
  const [users, setUsers] = useState<IUser[]>([])
const [query, setQuery] = useSearchParams();
    useEffect(() => {
// fetch('https://dummyjson.com/RESOURCE/?skip=5
      let page = +query.get('page') || 1;
        let skip = 30*page - 30;
        console.log(skip);
        getUsers(skip.toString()).then(({users}:ApiRes ) => setUsers(users))
    }, [ query]);


    return (
        <div>
            {
                users.map(user=><div key={user.id}>{user.id}  {user.email}</div>)

            }

        </div>
    );
};

export default UsersComp;