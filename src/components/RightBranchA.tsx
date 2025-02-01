import {useContext} from "react";
import {MyContext} from "../contetx/MyContext.tsx";

export const RightBranchA = () => {

    const {counterValue, increment} = useContext(MyContext);
    return (
        <div> RightBranchA
            <button onClick={() => {
                increment(counterValue); // викликає інкремент з аап з сетером
            }}>click me to increment counter in LBA</button>


        </div>
    );
};
