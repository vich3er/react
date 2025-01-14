import  {useEffect, useState} from 'react';
import {ITodo} from "../models/ITodo.ts";
import {getTasks} from "../services/service.ts";
import TodoComponent from "./TodoComponent.tsx";

const TodoComponents = () => {
    const [tasks, setTask] = useState<ITodo[]>([])
    useEffect(() => {
        getTasks().then( res =>
            setTask(res)
        )
    }, []);

   console.log(tasks);
    console.log(Array.isArray(tasks));
    return (
        <div className='grid grid-cols-1 gap-4'>

            {
                tasks.map(task =>  <TodoComponent item={task}  key={task.id}/> )

            }
            </div>
    );

};

export default TodoComponents;

