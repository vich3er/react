import axios from "axios";
import {ICar} from "../models/ICar.ts";
import {ICar2} from "../models/ICar2.ts";


const axiosInstance = axios.create({
    baseURL: 'http://185.69.152.209/carsAPI/v1',
    headers: {'accept': 'application/json'}
})

export const getAllCars = async () : Promise<ICar[]>=>{
    const {data} = await axiosInstance.get<ICar[]>('/cars');
    console.log(data);
    return data;

}

export const addCar = async (car : ICar2) : Promise<ICar2> => {
    const {data} = await axiosInstance.post<ICar2>('/cars', car);
    console.log(data);
    return data;
}