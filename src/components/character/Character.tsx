import {ICharacter} from "../../models/ICharacter";
import React, {FC, ReactNode} from "react";
import styles from "./character.module.css";

type IProps = { character: ICharacter } & { children: ReactNode };

const Character: FC<IProps> = ({character, children}) => {
    const {
        age,
        name,
        surname,
        photo
    } = character;

    console.log(character);
    return (<div>
        <h2 className={styles.title}>{name} {surname}</h2>
        <img src={photo} alt={name} className={styles.image}/>
        <p className={styles.text}>{children}</p>
    </div>)

}

export default Character;
