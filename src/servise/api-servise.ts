import {ApiRes} from "../models/ApiRes.ts";

const url = 'https://dummyjson.com/users';

export const getUsers = async (skipVal: string): Promise <ApiRes> => {
    console.log(url + '/? ' + 'skip=' + skipVal)
    return (
        await  fetch(url +'/?skip=' +  skipVal).
        then(res => res.json()))
}