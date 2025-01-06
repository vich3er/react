import  {FC, ReactNode} from 'react';
import {ISimpson} from "../models/ISimpson.ts";

type CharacterProtorype = {
    character: ISimpson;
    children?: ReactNode;

}

const CharacterComponent:FC<CharacterProtorype> = ({character, children}) => {
    return (
        <div>
            <h2 className='italic  text-orange-400 text-center text-2xl'>{character.name} {character.surname} </h2>
            <p> age : {character.age} </p>
            <img  src={character.photo} alt=""/>
            <p  >{children}</p>

        </div>
    );
};


export default CharacterComponent ;