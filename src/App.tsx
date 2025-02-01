import './App.css';
import {LeftBranch} from "./components/LeftBranch.tsx";
import {RightBranch} from "./components/RightBranch.tsx";
import {init, MyContext} from "./contetx/MyContext.tsx";
import {useState} from "react";

function App() {

    const [counter, setCounter] = useState<number>(init.counterValue);

    return (
        <>
            {/* контекст використовується коли використовуємо стейт ліфтинг і із самої верхньої компеоненти нам треба передати щось у ближчу
            */}

            {/* обгортаємо між собою компоненти між якими хочемо ділити наше сховище */}
            <MyContext.Provider value={{ // у велью можна вставити ініт просто той шо в файлі якщо не хочемо змінювати.
                // якщо хочемо то будуємо тут власний нааш об'єкт
                counterValue: counter,
                increment: (obj) => {
                    setCounter(++obj);
                }
            }}>

                <LeftBranch/>
                <RightBranch/>
            </MyContext.Provider>

        </>
    );
}

export default App
