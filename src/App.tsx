import React, {useEffect, useState} from 'react';
import './App.css';

const App = () => {

    const [skipValue, setSkipValue] = useState<number>(0)

    const [todos, setTodos] = useState<any[]>([]);
    useEffect(() => {
        fetch('https://dummyjson.com/todos?skip=' + skipValue)
            .then(value => value.json())
            .then(todosResponse => {
                setTodos(todosResponse.todos);
            });

    }, [skipValue]);


    return (
        <div>
            {todos.map(value => <li>{value.todo}</li>)}

            <hr/>
            <button onClick={() => {
                setSkipValue(skipValue - 30);
                console.log('dec');
            }}>prev
            </button>
            <button onClick={() => {

                setSkipValue(skipValue + 30);
                console.log('inc');
            }}>next
            </button>
        </div>
    );
}

export default App;
