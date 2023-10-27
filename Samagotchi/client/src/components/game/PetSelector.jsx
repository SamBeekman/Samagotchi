import { useState } from 'react';
import { petDummyData } from "../customHooks/useLoadData";
import Play from './Play';

export default function PetSelect() {

    const [currentPet, setCurrentPet] = useState();
    const [data, setData] = useState(petDummyData);

    const [hungryLevel, setHungryLevel] = useState(data[0].hungryLevel);
    const [sleepyLevel, setSleepyLevel] = useState(data[0].sleepyLevel);
    const [dirtyLevel, setDirtyLevel] = useState(data[0].dirtyLevel);
    const [lazyLevel, setLazyLevel] = useState(data[0].lazyLevel);

    const [isHungry, setIsHungry] = useState(data.isHungry);
    const [isSleepy, setIsSleepy] = useState(data.isSleepy);
    const [isDirty, setIsDirty] = useState(data.isDirty);
    const [isLazy, setIsLazy] = useState(data.isLazy);

    // // load data
    // useEffect(() => {
    //     const savingInterval = setInterval(() => {
    //         console.log(`saving data...  ${Date.now()}`);
    //     }, AUTO_SAVE_TIMER);

    //     return () => {
    //         clearInterval(savingInterval);
    //     };
    // }, []);

    // pet selection
    const selectPet = (index) => {
        setCurrentPet(data[index - 1]);
        console.log(currentPet);
    };

    // increase levels
    const increaseHungry = () => {
        setHungryLevel((val) => val + 1);
    };

    const increaseSleepy = () => {
        setSleepyLevel((val) => val + 1);
    };

    const increaseDirty = () => {
        setDirtyLevel((val) => val + 1);
    };

    const increaseLazy = () => {
        setLazyLevel((val) => val + 1);
    };

    // clear levels
    const clearHungryLevel = () => {
        setHungryLevel(0);
        setIsHungry(false);
    };

    const clearSleepyLevel = () => {
        setSleepyLevel(0);
        setIsSleepy(false);
    };

    const clearDirtyLevel = () => {
        setDirtyLevel(0);
        setIsDirty(false);
    };

    const clearLazyLevel = () => {
        setLazyLevel(0);
        setIsLazy(false);
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

    return (
        <>
            <div className="pet-buttons">
                Pets
                <button className="pet1" onClick={() => selectPet(1)}>1</button>
                <button className="pet2" onClick={() => selectPet(1)}>2</button>
                <button className="pet3" onClick={() => selectPet(1)}>3</button>
            </div>

            {currentPet ? <Play
                currentPet={currentPet}

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

