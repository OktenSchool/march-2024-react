import React, {FC} from 'react';
import './App.css';
import {ICharacter} from "./models/ICharacter";
import {simpsons} from "./data";
import Character from "./components/character/Character";


const App: FC = () => {

    return (
        <div>
            {
                simpsons.map((character: ICharacter) =>
                    <Character character={character}>
                        {character.info}
                    </Character>)
            }
        </div>
    );
}

export default App;
