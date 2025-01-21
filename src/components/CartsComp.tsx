import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import {IUser} from "../models/IUser.ts";
import {cartsServise} from "../servise/api-sercvise.ts";
import {ICart} from "../models/ICart.ts";
import CartComp from "./CartComp.tsx";

const CartsComp = () => {



  // const {state} = useLocation();

  // const user = state as IUser;
    const {userId} = useParams();
    console.log(userId);
    const [carts, setCarts] = useState<ICart[] >([]);
 useEffect(() => {
     cartsServise.getCartsByUserId(userId).then(res=>setCarts(res))
 }, [userId]);
    console.log(carts);
  const cartsLength = carts.length
    return (
        <div>

            {userId   && (   carts.length > 0 ? (
                        carts.map((cart, i)=> {return (
                            <>
                                <p key={i}>Кошик {i+ 1}</p>
                                <CartComp key={cart.id} cart={cart} />
                            </>
                        )
                        })
                ) :
                    (
                        <p>У цього користувача немає замовлень</p>
                    )) }


        </div>
    );
};

export default CartsComp;