import {cartsUrl, usersUrl} from "../constants/urls.ts";
import {IUser} from "../models/IUser.ts";
import {ICart} from "../models/ICart.ts";

export  const usersServise = {
    getAllUsers:  async ():Promise<IUser[]> =>
    {  const {users} = await fetch(usersUrl.getAllUsers).then(res => res.json())
        return users;
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