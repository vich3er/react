import {simpsons} from "../data/simpsons.ts";
import CharacterComponent from "./CharacterComponent.tsx";
const FamilyComponent = () => {
    return (
        <>
            {
                simpsons.map((character, index) =>  {
                    return (
                        <CharacterComponent character={character} key={index}>{character.info}</CharacterComponent>
                    )
                })
            }
        </>
    );
};

export default FamilyComponent;