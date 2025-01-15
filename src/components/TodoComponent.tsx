import {FC} from "react";
import {ITodo} from "../models/ITodo.ts";

type TaskProt = {
    item: ITodo;
 }

const TodoComponent:FC<TaskProt> = ({item}) => {
    console.log(item);
    const style = item.completed?'bg-gray-200': 'bg-red-500';

    return (
        <div className= {style}>
            <p>  completed:  {item.completed + ""} </p>
            <p> task: {item.title}</p>

        </div>
    );
};

export default TodoComponent;