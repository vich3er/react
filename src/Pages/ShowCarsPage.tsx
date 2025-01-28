import React, {useEffect, useState} from 'react';
import {getAllCars} from "../servise/api-servise.ts";
import {ICar} from "../models/ICar.ts";


const ShowCarsPage = () => {
    const [cars, setCars] = useState<ICar[]>([])
    useEffect(() => {
getAllCars().then(cars => setCars(cars))
    }, []);
    return (
        <div>
            {
                cars.map(car=><div key={car.id}>{car.brand} {car.price} {car.year} {car.id}</div>)
            }
        </div>
    );
};

export default ShowCarsPage;