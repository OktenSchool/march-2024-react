import React, {FC} from 'react';
import './App.css';
import MyCustomButtonComponent from "./components/my-custom-button-component/MyCustomButtonComponent";


const App: FC = () => {
    return (
        <>
            <MyCustomButtonComponent label={'first btn'} nameOfClass={'btn'}>asdadsad</MyCustomButtonComponent>
            <MyCustomButtonComponent label={'second btn'} nameOfClass={'btn'}>qewqewqwe</MyCustomButtonComponent>

        </>
    );
}

export default App;
