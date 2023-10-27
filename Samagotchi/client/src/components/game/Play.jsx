import { useEffect, useState } from "react";

export default function Play(props) {

    // timers
    const HUNGRY_TIMER = 1000 * 3;
    const SLEEPY_TIMER = 1000 * 5;
    const DIRTY_TIMER = 1000 * 7;
    const LAZY_TIMER = 1000 * 9;
    const AUTO_SAVE_TIMER = 1000 * 60;

    // hungry level
    useEffect(() => {
        const hungryInterval = setInterval(() => {
            props.increaseHungry();
        }, HUNGRY_TIMER);

        return () => {
            clearInterval(hungryInterval);
        };
    }, []);

    useEffect(() => {
        if (props.hungryLevel >= props.currentPet.hungryThreshold) {
            props.hasBecomeHungry();
        };
    }, [props.hungryLevel])

    // sleepy level
    useEffect(() => {
        const sleepyInterval = setInterval(() => {
            props.increaseSleepy();
        }, SLEEPY_TIMER);

        return () => {
            clearInterval(sleepyInterval);
        };
    }, []);

    useEffect(() => {
        if (props.sleepyLevel >= props.currentPet.sleepyThreshold) {
            props.hasBecomeSleepy();
        };
    }, [props.sleepyLevel])

    // dirty level
    useEffect(() => {
        const dirtyInterval = setInterval(() => {
            props.increaseDirty();
        }, DIRTY_TIMER);

        return () => {
            clearInterval(dirtyInterval);
        };
    }, []);

    useEffect(() => {
        if (props.dirtyLevel >= props.currentPet.dirtyThreshold) {
            props.hasBecomeDirty();
        };
    }, [props.dirtyLevel])

    // lazy level
    useEffect(() => {
        const lazyInterval = setInterval(() => {
            props.increaseLazy();
        }, LAZY_TIMER);

        return () => {
            clearInterval(lazyInterval);
        };
    }, []);

    useEffect(() => {
        if (props.lazyLevel >= props.currentPet.lazyThreshold) {
            props.hasBecomeLazy();
        };
    }, [props.lazyLevel])


    // feed pet
    const feedPet = () => {
        props.clearHungryLevel();
        console.log(`reset hungry level to 0`);
    };

    // sleep pet
    const sleepPet = () => {
        props.clearSleepyLevel();
        console.log(`reset sleepy level to 0`);
    };

    // clean pet
    const cleanPet = () => {
        props.clearDirtyLevel();
        console.log(`reset dirty level to 0`);
    };

    // walk pet
    const walkPet = () => {
        props.clearLazyLevel();
        console.log(`reset lazy level to 0`);
    };

    return (
        <>
            <h1>Play Page</h1>

            <section>

                <h2>Current pet is: {props.currentPet.name} </h2>
                <h3>{props.currentPet.name} is {props.currentPet.age} days old</h3>
                <h3>Level : {props.currentPet.level}</h3>
                <h3>Exp: {props.currentPet.exp} / 10</h3>

                <div className="action-buttons">
                    <div>
                        is hungry? {props.isHungry ? "yes" : "no"}
                        <button className="action feed" onClick={() => feedPet()}>Feed</button>
                        {props.hungryLevel}
                    </div>
                    <div>
                        is sleepy? {props.isSleepy ? "yes" : "no"}
                        <button className="action sleep" onClick={() => sleepPet()}>Sleep</button>
                        {props.sleepyLevel}
                    </div>
                    <div>
                        is dirty? {props.isDirty ? "yes" : "no"}
                        <button className="action clean" onClick={() => cleanPet()}>Clean</button>
                        {props.dirtyLevel}
                    </div>
                    <div>
                        needs exercise? {props.isLazy ? "yes" : "no"}
                        <button className="action walk" onClick={() => walkPet()}>Walk</button>
                        {props.lazyLevel}
                    </div>
                </div>

                <div>
                    <button>SAVE</button>
                </div>

            </section>
        </>
    );
}








