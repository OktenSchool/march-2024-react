import React, {FC, useState} from "react";
import './my-custom-button-component.css';
import styles from './my-custom-button-component.module.css'

interface IProps {
    nameOfClass: string,
    children: React.ReactNode,
    label: string
}

const MyCustomButtonComponent: FC<IProps> = ({label, nameOfClass, children}) => {

    const [counter, setCounter] = useState<number>(0);

    const someClickHandler = () => {
        setCounter(counter + 1);
        console.log(counter);
    }

    return (
        <div>
            <span>{label}</span>
            <button
                className={[styles.btnFontColor, styles.btnFontSize].join(' ')}
                onClick={() => {
                    someClickHandler();
                }}
            >

                {children} {counter}
            </button>
        </div>
    )

}

export default MyCustomButtonComponent;
