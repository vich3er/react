import {cartsUrl, usersUrl} from "../constants/urls.ts";
import {IUser} from "../models/IUser.ts";
import {ICart} from "../models/ICart.ts";
import {useDeferredValue} from "react";

export  const usersServise = {
    getAllUsers:  async ():Promise<IUser[]> =>
    {  const {users} = await fetch(usersUrl.getAllUsers).then(res => res.json())
        return users;
    },
    getUserById: async (userId:number):Promise<IUser> =>{
return await fetch(usersUrl.getUserById(userId)).
then((res) => res.json())
    }
}

export  const cartsServise = {
    getAllСarts:  async ():Promise<ICart[]> => {
        const {carts} = await fetch(cartsUrl.getAllCarts).then(res => res.json())
        return carts;
    },
    getCartsByUserId : async (userId: number):Promise<ICart[] | null> => {
        const {carts} = await fetch(cartsUrl.getCartsByUserId(userId)).then(res => res.json())
        return carts;
    }
}