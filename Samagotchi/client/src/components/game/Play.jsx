import { useEffect, useState } from "react";

export default function Play(props) {

    // timers
    const HUNGRY_TIMER = 1000 * 1;
    const SLEEPY_TIMER = 1000 * 2;
    const DIRTY_TIMER = 1000 * 3;
    const LAZY_TIMER = 1000 * 4;

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
        if (props.hungryLevel <= props.currentPet.hungryThreshold) {
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
        if (props.sleepyLevel <= props.currentPet.sleepyThreshold) {
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
        if (props.dirtyLevel <= props.currentPet.dirtyThreshold) {
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
        if (props.lazyLevel <= props.currentPet.lazyThreshold) {
            props.hasBecomeLazy();
        };
    }, [props.lazyLevel])


    // feed pet
    const feedPet = () => {
        props.clearHungryLevel();
        console.log(`increased hungry level by 20`);
    };

    // sleep pet
    const sleepPet = () => {
        props.clearSleepyLevel();
        console.log(`increased sleepy level by 20`);
    };

    // clean pet
    const cleanPet = () => {
        props.clearDirtyLevel();
        console.log(`increased dirty level by 20`);
    };

    // walk pet
    const walkPet = () => {
        props.clearLazyLevel();
        console.log(`increased lazy level by 20`);
    };

    // level up
    const levelUp = () => {
        props.levelUp();
    };

    return (
        <>
            <h1>Play Page</h1>

            <section>

                <h2>Current pet is: {props.currentPet.name} </h2>
                <h3>Level : {props.increaseLevel}</h3>
                <button disabled={props.increaseExp >= props.increaseReqExp ? false : true} onClick={() => levelUp()}>Level Up</button>
                <h3>Exp: {props.increaseExp} / {props.increaseReqExp}</h3>

                <div className="action-buttons">
                    <div>
                        is hungry? {props.isHungry ? "yes" : "no"}

                        {/* disabled={props.isHungry ? false : true} */}
                        <button disabled={false} className="action feed" onClick={() => feedPet()}>Feed</button>
                        {props.hungryLevel}
                    </div>
                    <div>
                        is sleepy? {props.isSleepy ? "yes" : "no"}
                        <button disabled={props.isSleepy ? false : true} className="action sleep" onClick={() => sleepPet()}>Sleep</button>
                        {props.sleepyLevel}
                    </div>
                    <div>
                        is dirty? {props.isDirty ? "yes" : "no"}
                        <button disabled={props.isDirty ? false : true} className="action clean" onClick={() => cleanPet()}>Clean</button>
                        {props.dirtyLevel}
                    </div>
                    <div>
                        needs exercise? {props.isLazy ? "yes" : "no"}
                        <button disabled={props.isLazy ? false : true} className="action walk" onClick={() => walkPet()}>Walk</button>
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








