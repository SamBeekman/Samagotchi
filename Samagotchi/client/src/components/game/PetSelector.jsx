import { useEffect, useState } from 'react';
import { petDummyData } from "../customHooks/useLoadData";
import Play from './Play';
import { Container, Button } from 'react-bootstrap';

export default function PetSelect() {

    const [data, setData] = useState(petDummyData);
    const [currentPet, setCurrentPet] = useState(data[0]); // will eventually come from local storage then from database

    const [exp, setExp] = useState(currentPet.exp);
    const [level, setLevel] = useState(currentPet.level);
    const [reqExp, setReqExp] = useState(currentPet.reqExp);
    const [sprite, setSprite] = useState(currentPet.sprite);

    const [hungryLevel, setHungryLevel] = useState(currentPet.hungryLevel);
    const [sleepyLevel, setSleepyLevel] = useState(currentPet.sleepyLevel);
    const [dirtyLevel, setDirtyLevel] = useState(currentPet.dirtyLevel);
    const [lazyLevel, setLazyLevel] = useState(currentPet.lazyLevel);

    const [isHungry, setIsHungry] = useState(currentPet.isHungry);
    const [isSleepy, setIsSleepy] = useState(currentPet.isSleepy);
    const [isDirty, setIsDirty] = useState(currentPet.isDirty);
    const [isLazy, setIsLazy] = useState(currentPet.isLazy);



    useEffect(() => {
        setExp(currentPet.exp);
        setLevel(currentPet.level);
        setReqExp(currentPet.reqExp);
        setHungryLevel(currentPet.hungryLevel);
        setSleepyLevel(currentPet.sleepyLevel);
        setDirtyLevel(currentPet.dirtyLevel);
        setLazyLevel(currentPet.lazyLevel);
        setIsHungry(currentPet.isHungry);
        setIsSleepy(currentPet.isSleepy);
        setIsDirty(currentPet.isDirty);
        setIsLazy(currentPet.isLazy);
        setSprite(currentPet.sprite);
    }, [currentPet]);


    // load pet data in local storage
    useEffect(() => {
        const pet1Data = localStorage.getItem(`${data[0].name}`);
        if (!pet1Data) {
            localStorage.setItem(`${data[0].name}`, JSON.stringify(data[0]));
        }

        const pet2Data = localStorage.getItem(`${data[1].name}`);
        if (!pet2Data) {
            localStorage.setItem(`${data[1].name}`, JSON.stringify(data[1]));
        }

        const pet3Data = localStorage.getItem(`${data[2].name}`);
        if (!pet3Data) {
            localStorage.setItem(`${data[2].name}`, JSON.stringify(data[2]));
        }
    }, []);


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
        setExp((val) => val + 1);
    };

    const clearSleepyLevel = () => {
        setSleepyLevel((val) => val + 20);
        setIsSleepy(false);
        setExp((val) => val + 1);
    };

    const clearDirtyLevel = () => {
        setDirtyLevel((val) => val + 20);
        setIsDirty(false);
        setExp((val) => val + 1);
    };

    const clearLazyLevel = () => {
        setLazyLevel((val) => val + 20);
        setIsLazy(false);
        setExp((val) => val + 1);
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
        setLevel((val) => val + 1);
        setExp((val) => val - reqExp);
        setReqExp((val) => val + 10);
    };


    // pet selection and get pet from local stoarge on switch
    const selectPet = (index) => {

        const petData = localStorage.getItem(`${data[index - 1].name}`);
        if (petData) {
            const getPet = JSON.parse(petData);
            setCurrentPet(getPet);
        } else {
            console.log('no pet data found');
        }
    };



    const save = () => {

        console.log(currentPet.name);
        const petName = currentPet.name;

        localStorage.setItem(`${petName}`, JSON.stringify({
            ...currentPet,

            level: level,
            exp: exp,
            reqExp: reqExp,
            hungryLevel: hungryLevel,
            isHungry: isHungry,
            sleepyLevel: sleepyLevel,
            isSleepy: isSleepy,
            dirtyLevel: dirtyLevel,
            isDirty: isDirty,
            lazyLevel: lazyLevel,
            isLazy: isLazy,
        }));

    };


    return (

        <Container>
            <br />
            <div className="pet-buttons text-center">
                <h3>Select your Pet</h3>
                <br />
                <Button variant="outline-primary" size="lg" onClick={() => { selectPet(1); save() }}>1</Button>
                <Button variant="outline-primary" size="lg" onClick={() => { selectPet(2); save() }}>2</Button>
                <Button variant="outline-primary" size="lg" onClick={() => { selectPet(3); save() }}>3</Button>
            </div>


            {currentPet ? <Play
                currentPet={currentPet}
                exp={exp}
                level={level}
                reqExp={reqExp}
                levelUp={levelUp}
                sprite={sprite}
                // save={save}

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

