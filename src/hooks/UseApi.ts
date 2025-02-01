import {useEffect, useState} from "react";

export const useApi = <T>(url: string)  => {
    const [info, setInfo] = useState<T | null>(null);
    useEffect(() => {
        fetch(url).then((response) =>
        response.json()).
        then(json =>  setInfo(json as T))
    }, [])
    console.log(info);
    return  info
}

