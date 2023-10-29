import { useEffect, useState } from 'react';
import { petDummyData } from "../customHooks/useLoadData";
import Play from './Play';
import { Container } from 'react-bootstrap';

export default function PetSelect() {

    const [data, setData] = useState(petDummyData);
    const [currentPet, setCurrentPet] = useState(data[0]); // will eventually come from local storage then from database

    const [increaseExp, setIncreaseExp] = useState(currentPet.exp);
    const [increaseLevel, setIncreaseLevel] = useState(currentPet.level);
    const [increaseReqExp, setIncreaseReqExp] = useState(currentPet.reqExp);

    const [hungryLevel, setHungryLevel] = useState(currentPet.hungryLevel);
    const [sleepyLevel, setSleepyLevel] = useState(currentPet.sleepyLevel);
    const [dirtyLevel, setDirtyLevel] = useState(currentPet.dirtyLevel);
    const [lazyLevel, setLazyLevel] = useState(currentPet.lazyLevel);

    const [isHungry, setIsHungry] = useState(currentPet.isHungry);
    const [isSleepy, setIsSleepy] = useState(currentPet.isSleepy);
    const [isDirty, setIsDirty] = useState(currentPet.isDirty);
    const [isLazy, setIsLazy] = useState(currentPet.isLazy);


    useEffect(() => {
        setIncreaseExp(currentPet.exp);
        setIncreaseLevel(currentPet.level);
        setIncreaseReqExp(currentPet.reqExp);
        setHungryLevel(currentPet.hungryLevel);
        setSleepyLevel(currentPet.sleepyLevel);
        setDirtyLevel(currentPet.dirtyLevel);
        setLazyLevel(currentPet.lazyLevel);
        setIsHungry(currentPet.isHungry);
        setIsSleepy(currentPet.isSleepy);
        setIsDirty(currentPet.isDirty);
        setIsLazy(currentPet.isLazy);
    }, [currentPet]);


    // load pet data in local storage
    useEffect(() => {
        const pet1Data = localStorage.getItem('Pet 1');
        if (!pet1Data) {
            localStorage.setItem('Pet 1', JSON.stringify(data[0]));
        }

        const pet2Data = localStorage.getItem('Pet 2');
        if (!pet2Data) {
            localStorage.setItem('Pet 2', JSON.stringify(data[1]));
        }

        const pet3Data = localStorage.getItem('Pet 3');
        if (!pet3Data) {
            localStorage.setItem('Pet 3', JSON.stringify(data[2]));
        }
    }, []);


    // save and update current pet values to local storage
    // move to Play????

    // save

    const save = () => {
        localStorage.setItem('Pet X', JSON.stringify(currentPet));
    };

    // useEffect(() => {
    //     localStorage.setItem('Pet X', JSON.stringify(currentPet));
    // }, [currentPet]);


    // pet selection and get pet from local stoarge on switch
    const selectPet = (index) => {

        const petData = localStorage.getItem(`Pet ${index}`);
        if (petData) {
            const getPet = JSON.parse(petData);
            setCurrentPet(getPet);
        } else {
            console.log('no pet data found');
        }
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

        <Container>
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
                save={save}

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
        </Container>

    )
};

