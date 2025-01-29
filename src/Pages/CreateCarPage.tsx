import React from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {validators} from "../validators/car-validator.ts";
import {addCar} from "../servise/api-servise.ts";
 
interface FormProp {
    brand: string;
    price: number;
    year: number;
}


const CreateCarPage = () => {

    const {handleSubmit, register, 
    formState: {errors, isValid}} = useForm<FormProp>({
        mode: "all", resolver: joiResolver(validators)
    })



const customHandler =(formDataProps: FormProp)=>{
    console.log(formDataProps);
    addCar(formDataProps);

}

let buttonStyle = !isValid ? "text-white bg-amber-200" :"bg-amber-300";

    return (
        <div  className='h-full flex justify-center items-center'>
            <form className='bg-gray-200 p-10 inline-block' onSubmit={handleSubmit(customHandler)}>
                <label>
                    <input type="text" placeholder='Бренд' {...register('brand')} />
                    {errors.brand && <p>{errors.brand.message}</p>}
                </label>
                <label>
                    <input type='number' placeholder='Ціна' {...register('price')} />
                    {errors.price && <p>{errors.price.message}</p>}

                </label>
                <label >
                    <input type='number' placeholder='Рік випуску' {...register('year')} />
                    {errors.price && <p>{errors.price.message}</p>}
                </label>
                <button disabled={!isValid} className={buttonStyle}>Додати</button>
            </form>
        </div>

    );
};

export default CreateCarPage;