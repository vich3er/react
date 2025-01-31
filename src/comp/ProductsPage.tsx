import React, {useLayoutEffect} from 'react';
import {load, refresh} from "../services/api-servise.ts";

const ProductsPage = () => {
    useLayoutEffect(() => {
        load().catch(err=>{
            refresh().then(()=>load()) // якщо буде помилка то визветьсяя рефреш токен. після ньго викорстати зен бо то запит наапі
        })
    })
    return (
        <div>
            pr
            </div>
    );
};

export default ProductsPage;