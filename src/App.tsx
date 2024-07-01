import React from 'react';
import './App.css';
import {useFetch} from "./hooks/useFetch";


const App = () => {

    let data = useFetch<{ id: number, title: string }>('/posts');

    return (
        <div>
            {
                data.map(value => <div>{value.title}</div>)
            }


        </div>
    );
}

export default App;
