import React, {ReactNode, useEffect, useRef, useState} from 'react';
import './App.css';

const App = () => {

    // variable - reinit after each rerender
    // useRef - store tate between rerender, but cannot render themself
    // useState - useRef + rerender

    const [counter, setCounter] = useState<number>(0);

    const ref = useRef<any>();
    useEffect(() => {
        console.log(ref);
    }, []);


    return (
        <div>
            <button
                onClick={() => {
                    setCounter(prevState => prevState + 1);

                }}
            >click me {counter}
            </button>
            <button ref={ref}
                    onClick={() => {

                        console.log(ref.current);

                    }}
            >ref {ref.current}
            </button>
            <h2>ref : {ref.current}</h2>
        </div>
    );
}

export default App;
