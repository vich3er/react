import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const BlueB = () => {
    const dark = 'bg-red-950'
    const light = 'bg-red-200'
    let {theme} = useContext(MyContext);
    if (theme=='dark') {theme=dark}
    if (theme=='light') {theme=light}
    return (
        <>
            <button className={theme}>sedrfgho</button>
        </>
    );
};