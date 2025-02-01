import './App.css'
import {Blue} from "./components/Blue.tsx";
import {Red} from "./components/Red.tsx";
import {init, MyContext} from "./context/MyContext.tsx";
import {useContext, useState} from "react";


function App() {
const [theme, setTheme] = useState<string>(init.theme);
  return (
      <>
        <MyContext.Provider value={{
            theme: theme,
            setTheme: (theme)=> {
                if (theme=='light')
                setTheme('dark')
                else setTheme('light')
            }
        }}>
            <Blue/>
            <Red/>
        </MyContext.Provider>
      </>
  )
}

export default App
