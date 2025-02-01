import {useContext, useEffect} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const RedB = () => {
    const {theme, setTheme} = useContext(MyContext)

    return (

        <>
            <button onClick={()=>
            {
                setTheme(theme)

            }
            }>change theme on dark</button>

        </>
    );
};