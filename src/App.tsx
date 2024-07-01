import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

    const [counter, setCounter] = useState(0);
    useEffect(() => {
        let id = setInterval(() => {
            console.log('interval')
        }, 1000);

        return () => {
            clearInterval(id);
        }
    }, [counter]);


    return (
        <div>

            <button onClick={() => {
                setCounter(counter + 1);
            }}> push me {counter}
            </button>

        </div>
    );
}

export default App;
