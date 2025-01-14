import React, {useEffect, useState} from 'react';
import {getUsers} from "../services/api-servise.ts";
import TodoComponent from "./TodoComponent.tsx";
import {ITodo} from "../models/ITodo.ts";

const TodoComponents = () => {

const [usersTasks, setUserTask] = useState<ITodo[]>([])
    useEffect(() => {
        getUsers().then(
            res => setUserTask(res)
        )
    }, []);
    return (
        <div className="grid grid-cols-4 gap-2">
            {
                usersTasks.map(task => <TodoComponent item={task} key={task.id}/>)
            }
        </div>
    );
};

export default TodoComponents;