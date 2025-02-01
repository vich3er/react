import {useCallback, useEffect, useMemo, useState} from "react";
import UserC from "./UserC.tsx";

export const UsersComponent = () => {
    console.log('users');
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

const foo = useCallback( ()=>{ // за доп цього якщо використовуємо мемо але у компоненті є пропси то він виконається один раз
    // бо якщо є пропси без нього було б не 1
    // масив залежностей працює так само як в юз ефекті і компонент визветься ще раз коли там зміниться шось
    console.log("test")}, [])

const arr: number[] = useMemo(() => {
    return  [11, 22, 33] //кожного разу формається нова адреса коли просто визначаємо масив як масив без цього хуку
    // тому без юз мемо компонент буде переренджуватись
}, [])
    return (
        <div>users component
            <UserC foo={foo} arr={arr}/>
        {/*цей компонент відпрацьовує другий раз через юз стейт, бо спершу виконється все синхронне, потім ас і воно викликає ререндер
        і перевиконання всієї нашої функції*/}
        </div>
    );
};