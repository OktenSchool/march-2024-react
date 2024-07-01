import {useEffect, useState} from "react";

export const useFetch = <T, >(url: string) => {
    const [data, setData] = useState<T[]>([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com' + url)
            .then(value => value.json())
            .then(value => {
                setData([...value]);
            });

    }, []);

    return data;
}
