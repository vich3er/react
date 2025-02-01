import {useEffect, useState} from "react";

export const useFetch = ()=>
{
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value);
            });

        return () => {
            console.log('unsubscribe');
        }

    }, []);
return  users;

// щоб змінювати масив треба тут отак повертати і робити  де викликаємо теж по іншому
    // return [users, setUsers]
}