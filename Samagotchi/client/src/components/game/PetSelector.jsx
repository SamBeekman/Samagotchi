import { useState } from 'react';
import { petDummyData } from "../customHooks/useLoadData";
import Play from './Play';

export default function PetSelect() {

    const [data, setData] = useState(petDummyData);
    const [currentPet, setCurrentPet] = useState();
    const [increaseExp, setIncreaseExp] = useState(data[0].exp);
    const [increaseLevel, setIncreaseLevel] = useState(data[0].level);
    const [increaseReqExp, setIncreaseReqExp] = useState(data[0].reqExp);

    const [hungryLevel, setHungryLevel] = useState(data[0].hungryLevel);
    const [sleepyLevel, setSleepyLevel] = useState(data[0].sleepyLevel);
    const [dirtyLevel, setDirtyLevel] = useState(data[0].dirtyLevel);
    const [lazyLevel, setLazyLevel] = useState(data[0].lazyLevel);

    const [isHungry, setIsHungry] = useState(data[0].isHungry);
    const [isSleepy, setIsSleepy] = useState(data[0].isSleepy);
    const [isDirty, setIsDirty] = useState(data[0].isDirty);
    const [isLazy, setIsLazy] = useState(data[0].isLazy);


    // pet selection
    const selectPet = (index) => {
        setCurrentPet(data[index - 1]);
        console.log(currentPet);
    };

    // increase levels
    const increaseHungry = () => {
        setHungryLevel((val) => {
            return val > 0 ? val - 1 : val;
        });
    };

    const increaseSleepy = () => {
        setSleepyLevel((val) => {
            return val > 0 ? val - 1 : val;
        });
    };

    const increaseDirty = () => {
        setDirtyLevel((val) => {
            return val > 0 ? val - 1 : val;
        });
    };

    const increaseLazy = () => {
        setLazyLevel((val) => {
            return val > 0 ? val - 1 : val;
        });
    };

    // clear levels
    const clearHungryLevel = () => {
        setHungryLevel((val) => val + 20);
        setIsHungry(false);
        setIncreaseExp((val) => val + 1);
    };

    const clearSleepyLevel = () => {
        setSleepyLevel((val) => val + 20);
        setIsSleepy(false);
        setIncreaseExp((val) => val + 1);
    };

    const clearDirtyLevel = () => {
        setDirtyLevel((val) => val + 20);
        setIsDirty(false);
        setIncreaseExp((val) => val + 1);
    };

    const clearLazyLevel = () => {
        setLazyLevel((val) => val + 20);
        setIsLazy(false);
        setIncreaseExp((val) => val + 1);
    };

    // set status
    const hasBecomeHungry = () => {
        setIsHungry(true);
    };

    const hasBecomeSleepy = () => {
        setIsSleepy(true);
    };

    const hasBecomeDirty = () => {
        setIsDirty(true);
    };

    const hasBecomeLazy = () => {
        setIsLazy(true);
    };

    // level up
    const levelUp = () => {
        setIncreaseLevel((val) => val + 1);
        setIncreaseExp((val) => val - increaseReqExp);
        setIncreaseReqExp((val) => val + 10);
    };

    return (
        <>
            <div className="pet-buttons">
                Pets
                <button className="pet1" onClick={() => selectPet(1)}>1</button>
                <button className="pet2" onClick={() => selectPet(2)}>2</button>
                <button className="pet3" onClick={() => selectPet(3)}>3</button>
            </div>

            {currentPet ? <Play
                currentPet={currentPet}
                increaseExp={increaseExp}
                increaseLevel={increaseLevel}
                increaseReqExp={increaseReqExp}
                levelUp={levelUp}

                isHungry={isHungry}
                hungryLevel={hungryLevel}
                increaseHungry={increaseHungry}
                clearHungryLevel={clearHungryLevel}
                hasBecomeHungry={hasBecomeHungry}

                isSleepy={isSleepy}
                sleepyLevel={sleepyLevel}
                increaseSleepy={increaseSleepy}
                clearSleepyLevel={clearSleepyLevel}
                hasBecomeSleepy={hasBecomeSleepy}

                isDirty={isDirty}
                dirtyLevel={dirtyLevel}
                increaseDirty={increaseDirty}
                clearDirtyLevel={clearDirtyLevel}
                hasBecomeDirty={hasBecomeDirty}

                isLazy={isLazy}
                lazyLevel={lazyLevel}
                increaseLazy={increaseLazy}
                clearLazyLevel={clearLazyLevel}
                hasBecomeLazy={hasBecomeLazy}>
            </Play> : <p>pick a pet</p>}
        </>
    )
};

