import  {FC, ReactNode} from 'react';
import {ISimpson} from "../models/ISimpson.ts";

type CharacterProtorype = {
    character: ISimpson;
    children?: ReactNode;

}

const CharacterComponent:FC<CharacterProtorype> = ({character, children}) => {
    return (
        <div>
<h2>{character.name} {character.surname} </h2>
            <p>{character.age} </p>
            <p>{children}</p>
            <img src={character.photo} alt=""/>
        </div>
    );
};


export default CharacterComponent ;