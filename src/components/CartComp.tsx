import {FC} from "react";
import {ICart} from "../models/ICart.ts";
import OneCart from "./OneCart.tsx";
type CartProps={
    cart: ICart;
}

const CartComp:FC<CartProps> = ({cart}) => {
    const {products} = cart;
    console.log(cart);
    console.log(products);

    return (
        <div>
             <ul>
                <li className='bg-amber-300'>Загальна сума: {cart.discountedTotal}</li>
                <OneCart products={products}/>
            </ul>

        </div>
    );
};

export default CartComp;