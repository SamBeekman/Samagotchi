import { useState, useEffect } from 'react';
import { petDummyData } from "../customHooks/useLoadData";
import Play from './Play';

export default function PetSelect() {

    const [currentPet, setCurrentPet] = useState();
    const [data, setData] = useState(petDummyData);

    const [hungerLevel, setHungerLevel] = useState(data.hungerLevel);
    const [isHungry, setIsHungry] = useState(data.isHungry);

    const increaseHunger = () => {
        const newHungerLevel = hungerLevel + 1;
        setHungerLevel(newHungerLevel);
    };
    const clearHungerLevel = () => {
        setHungerLevel(0);
        setIsHungry(false);
    };
    const hasBecomeHungry = () => {
        setIsHungry(true);
    };


    // const [] = useState();
    // const [] = useState();
    // const [] = useState();
    // const [] = useState();
    // const [] = useState();
    // const [] = useState();
    // const [] = useState();
    // const [] = useState();
    // const [] = useState();
    // const [] = useState();
    // const [] = useState();




    // load data
    useEffect(() => {




        // const savingInterval = setInterval(() => {
        //     console.log(`saving data...  ${Date.now()}`);
        // }, AUTO_SAVE_TIMER);

        // return () => {
        //     clearInterval(savingInterval);
        // };
    }, []);

    // pet selection
    const selectPet = (index) => {
        setCurrentPet(data[index - 1]);
        console.log(currentPet);
    };

    return (
        <>
            <div className="pet-buttons">
                Pets
                <button className="pet1" onClick={() => selectPet(1)}>1</button>
                <button className="pet2" onClick={() => selectPet(1)}>2</button>
                <button className="pet3" onClick={() => selectPet(1)}>3</button>
            </div>

            {currentPet ? <Play isHungry={isHungry} hungerLevel={hungerLevel} increaseHunger={increaseHunger} clearHungerLevel={clearHungerLevel} hasBecomeHungry={hasBecomeHungry} currentPet={currentPet}></Play> : <p>pick a pet</p>}
        </>
    )
};

