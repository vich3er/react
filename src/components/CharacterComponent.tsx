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
            <div className='flex row  '>
                <img className='inline' src={character.photo} alt=""/>
                <p className='inline-block border border-amber-400 p-1'>{children}</p>
            </div>

        </div>
    );
};


export default CharacterComponent;