import {BlueB} from "./BlueB.tsx";
import {useContext} from "react";
import {MyContext} from "../context/MyContext.tsx";

export const Blue = () => {
    const light = 'bg-blue-200';
    const dark = 'bg-blue-950';
    let {theme} = useContext(MyContext);
    if (theme=='dark') {theme=dark}
    if (theme=='light') {theme=light}
    return (
        <>
            <div className={theme}></div>
            <BlueB/>
        </>
    );
};