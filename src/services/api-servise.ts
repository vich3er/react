import {IUser} from "../models/IUser.ts";
import {urls} from "../constants/urls.ts";
import {IPost} from "../models/IPost.ts";

export const userService = {
    getUsers:async ():  Promise<IUser[]> => {
        const {users} = await  fetch(urls.users).then(res => res.json());
        return users;
    },
    // getUsers:async ():  Promise<IUser[]> => {
    //    return   await  fetch(urls.users).then(res => res.json()).
    //        then(({users}:IUser[])=>users );
    //
    // }

}

export const  postsService = {
    getPosts: async ():  Promise<IPost[]> => {
        const {posts} = await fetch(urls.posts).then(res => res.json());
        return posts;
    }
}