import {ITodo} from "../models/ITodo.ts";

export const  getTasks = async ():Promise<ITodo[]> =>
{
    return await fetch(import.meta.env.VITE_API_URL).then(res => res.json())
}
