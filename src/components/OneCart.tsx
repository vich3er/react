import React, {FC} from 'react';
import {ICart, ICartCartsProducts} from "../models/ICart.ts";


type  OneCartProp = {
    products: ICartCartsProducts[]
}
const OneCart:FC<OneCartProp> = ({products}) => {

    return (
        <div>
            {
                products.map(product => <p key={product.id}>{product.discountedTotal+ " "}{product.title}</p> )

            }

        </div>
    );
};

export default OneCart;