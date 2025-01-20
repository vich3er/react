import React, {useEffect, useState} from 'react';
import {useLocation} from "react-router-dom";
import {IUser} from "../models/IUser.ts";
import {cartsServise} from "../servise/api-sercvise.ts";
import {ICart} from "../models/ICart.ts";
import CartComp from "./CartComp.tsx";

const CartsComp = () => {
  const {state} = useLocation();
  const user = state as IUser;
    const [carts, setCarts] = useState<ICart[] >([]);
 useEffect(() => {
     cartsServise.getCartsByUserId(+user.id).then(res=>setCarts(res))
 }, [user.id]);
    console.log(carts);
    // console.log(document.getElementById(String(user.id)));
    // document.getElementById(user.id).classList.toggle('bg-amber-300');
    return (
        <div>

            {carts.length > 0 ? (
                carts.map(cart => <CartComp key={cart.id} cart={cart}/>)
            ) :
                (
                <p>У цього користувача немає замовлень</p>
            )}


        </div>
    );
};

export default CartsComp;