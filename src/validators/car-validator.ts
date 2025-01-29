import * as Joi from "joi";

export const validators = Joi.object({
    brand: Joi.string().pattern(/^[a-zA-Zа-яА-яёЁіІїЇєЄҐґ]{1,20}$/).
    required().messages({
        'string.pattern.base': "Дозволені лише англійські, російські, українські букви"
    })
,
    price: Joi.number().min(0).max(1000000).required().messages({
        'number.min':'Мінімальна ціна нуль',
        'number.max': 'Максимальна ціна 1000000'
    }),
    year: Joi.number().min(1990).max(2024).required().messages({
        'number.min': 'Мінімальний рік 1990',
        'number.max': 'Максимальний рік 2024',
    })
})




