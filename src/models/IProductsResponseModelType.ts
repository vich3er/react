import { IProduct } from "./IProduct";

 export type IProductsResponseModelType = { // та модель даних які віддає сервак
    total: number;
    skip: number;
    limit: number;
    products: IProduct[]
 }