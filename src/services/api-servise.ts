import   axios from "axios";
import {IUserWT} from "../models/IUserWT.ts";
import {IProduct} from "../models/IProduct.ts";
import {IProductsResponseModelType} from "../models/IProductsResponseModelType.ts";
import {ITokenPair} from "../models/ITokenPair.ts";

const axiosInstance = axios.create({ // аксіос кріейт щоб посилати запити
    baseURL: 'https://dummyjson.com/auth',
    headers: {}// не вставляє хедери бо не всюди їх кидаю
})

type loginData = {
    username: string,
    password: string,
    expiresInMins: number
}

// для логіну треба зробити пост запит.
export const login  = async ({username, password, expiresInMins }:loginData): Promise<IUserWT> => // нам прийде об'єкт з такими то полями
// (передамо зразу їх на сторінці для логінції) і декстиктуруємо зраху їх із об єкта
{
    const {data: userWithTok} = await axiosInstance.post('/login', {username, password, expiresInMins}) // передаємо дані об'єктом в тіло(баді) запиту
    console.log(userWithTok);
    localStorage.setItem('user', JSON.stringify(userWithTok)); // кидаємо юзера з токенами в локал сторедж
    return userWithTok;
}


// при запіті на хуйні де треба логінитись треба в гет запит в хедер додавати аксес токен. лише ця функція не спрацює і треба ще одна яка є там далі
export const load = async () : Promise<IProduct[]> =>{
const {data: {products}} = await axiosInstance.get<IProductsResponseModelType>('/products')  ;       // я вирізаю дату а з неї вирізаю продукти
    console.log(products);
    return products;
}

// продивляємось всі запити, перехоплюємо реквест  запити
axiosInstance.interceptors.request.use((requestObj) => {
    if (requestObj.method?.toUpperCase() === 'GET') // дивимось чи запит є і чи він гет
         requestObj.headers.Authorization = 'Bearer ' +  retriveLocalStorage<IUserWT>('user').accessToken
// якщо це так то до хедерів додаємо токени для авторизації взяті з локал стореджу за допомгою кастомної функції
    console.log(requestObj);
    return requestObj;
})

// цю функцію треба в окрему папку під назвою хелперс, бо вона не містить ьзапитів до апі
  export const  retriveLocalStorage = <T>(key: string)=> // роблю дженерік щоб можна було використовувати будь які типи
  {
      const obj = localStorage.getItem(key) || '';
      if (!obj)
          return {} as T // якщо об'єкта в локал стореджі не існує( не залогінені чи токен закінчився) то повертаємо пустий обєкт типізований як т
      // якщо ні то парсимо наш об'єкт з стореджу і повертаємо як т
     // return JSON.parse(obj) as T
      const  parse = JSON.parse(obj)
      return parse

  }

  // короче токен триває недовго і його весь час треба оновлювати
 export const refresh = async () => {
    const userWT = retriveLocalStorage<IUserWT>('user');
    // робимо запит на рефреш. дестриктруюмо з дати токени які отримаємо. як обєкт передаємо страрий токен з локал стореджу і час коли спливе новий отриманий токен
    const {data: {accessToken, refreshToken}} = await axiosInstance.post<ITokenPair>('/refresh', {
        refreshToken: userWT.refreshToken,
        expiresInMins: 1
    })
    userWT.accessToken = accessToken;
    userWT.refreshToken = refreshToken
    localStorage.setItem('user', JSON.stringify(userWT));

}