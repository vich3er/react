import   axios from "axios";
import {IUserWT} from "../models/IUserWT.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

const axiosInstance = axios.create({ // аксіос кріейт щоб посилати запити
    baseURL: 'https://dummyjson.com/auth',
    headers: {}
})

type loginData = {
    username: string,
    password: string,
    expiresInMins: number
}

export const login  = async ({username, password, expiresInMins }:loginData): Promise<IUserWT> => // нам прийде об'єкт з такими то полями

{
    const {data: userWithTok} = await axiosInstance.post('/login', {username, password, expiresInMins})
    console.log(userWithTok);
    localStorage.setItem('user', JSON.stringify(userWithTok));
    return userWithTok;
}



export const load = async () : Promise<IProduct[]> =>{
const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products')  ;
    console.log(products);
    return products;
}

axiosInstance.interceptors.request.use((requestObj) => {
    if (requestObj.method?.toUpperCase() === 'GET')
         requestObj.headers.Authorization = 'Bearer ' +  retriveLocalStorage<IUserWT>('user').accessToken
    console.log(requestObj);
    return requestObj;
})


  export const  retriveLocalStorage = <T>(key: string)=>
  {
      const obj = localStorage.getItem(key) || '';
      if (!obj)
          return {} as T
      const  parse = JSON.parse(obj)
      return parse

  }


 export const refresh = async () => {
    const userWT = retriveLocalStorage<IUserWT>('user');
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: userWT.refreshToken,
        expiresInMins: 1
    })
    userWT.accessToken = accessToken;
    userWT.refreshToken = refreshToken
    localStorage.setItem('user', JSON.stringify(userWT));

}
