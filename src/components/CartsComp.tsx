import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {IUser} from "../models/IUser.ts";
import {cartsServise} from "../servise/api-sercvise.ts";
import {ICart} from "../models/ICart.ts";



const CartsComp = () => {
  const {state} = useLocation();
  const user = state as IUser;
    const [carts, setCarts] = useState<ICart[]>([]);
 useEffect(() => {
     cartsServise.getCartsByUserId(+user.id).then(res=>setCarts(res))
 }, [user.id]);
    if (user) console.log(user);

    return (
        <div>
            {

            }
        </div>
    );
};

export default CartsComp;