import {FC} from 'react';
import {ITodo} from "../models/ITodo.ts";

type TaskProt = {
    item: ITodo;
}
const TodoComponent:FC<TaskProt> = ({item}) => {
    const style = item.completed?"bg-emerald-200": "bg-red-500"
    console.log(item);
    return (
        <div className={style}>
           <p> userId: {item.userId}</p>
            <p>task: {item.todo}</p>
            <p>comleted: {item.completed + ""}</p>
        </div>
    );
};

export default TodoComponent ;