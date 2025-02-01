import {createContext} from "react";

type Theme =  {
    theme:  string
    setTheme: (th: string)=>  void
}

export const init: Theme = {
    theme: 'light',
    setTheme: (th: string)=> console.log(th)
}

export const MyContext = createContext<Theme>(init)