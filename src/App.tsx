import React, {ReactNode, useEffect, useReducer, useRef, useState} from 'react';
import './App.css';

const reducer = (
    state: number,
    action: { type: string, payload: number }
) => {
    switch (action.type) {
        case 'add':
            return state + action.payload;
        case 'remove':
            return state + action.payload;
    }
    return state;
}

const App = () => {


    const [counter, disptach] = useReducer(reducer, 0);

    return (
        <div>

            <h2>{counter}</h2>
            <button
                onClick={() => {
                    disptach({type: 'add', payload: 10});
                }}
            >inc
            </button>
            <hr/>
            <button
                onClick={() => {
                    disptach({type: 'remove', payload: -20});

                }}
            >dec
            </button>

        </div>
    );
}

export default App;
