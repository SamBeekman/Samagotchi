import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import ProgressBar from 'react-bootstrap/ProgressBar';


export default function Play(props) {

    // timers
    const HUNGRY_TIMER = 100 * 1;
    const SLEEPY_TIMER = 100 * 2;
    const DIRTY_TIMER = 100 * 3;
    const LAZY_TIMER = 100 * 4;

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

    // save
    const save = () => {
        // console.log(props);
        const saveArray = [
            props.increaseExp,
            props.increaseLevel,
            props.increaseReqExp,
            props.isHungry,
            props.hungryLevel,
            props.isSleepy,
            props.sleepyLevel,
            props.isDirty,
            props.dirtyLevel,
            props.isLazy,
            props.lazyLevel
        ]
        // localStorage.setItem('Pet X', JSON.stringify(saveArray));
        localStorage.setItem('Pet X', JSON.stringify(props));
    };

    // setCurrentPet.hungrylevel: props.hungrylevel

    return (
        <>
            <section>
                <br />
                <h2>Current pet is: {props.currentPet.name} </h2>
                <br />
                <h3>Level : {props.increaseLevel}</h3>
                <br />
                <Button variant="success" disabled={props.increaseExp >= props.increaseReqExp ? false : true} onClick={() => levelUp()}>Level Up</Button>
                <br />
                <br />
                <h3>Exp: {props.increaseExp} / {props.increaseReqExp}</h3>
                <br />

                <div className="action-buttons">
                    <div>
                        is hungry? {props.isHungry ? "yes" : "no"}

                        {/* disabled={props.isHungry ? false : true} */}
                        <Button disabled={false} className="action feed" onClick={() => feedPet()}>Feed</Button>

                        {
                            props.hungryLevel >= 50 ? (
                                <ProgressBar animated now={props.hungryLevel} label={props.hungryLevel} />
                            ) : (
                                props.hungryLevel <= 10 ? (
                                    <ProgressBar variant="danger" animated now={props.hungryLevel} label={props.hungryLevel} />
                                ) : (
                                    <ProgressBar variant="warning" animated now={props.hungryLevel} label={props.hungryLevel} />
                                )
                            )
                        }
                    </div>
                    <br />
                    <div>
                        is sleepy? {props.isSleepy ? "yes" : "no"}
                        <Button disabled={props.isSleepy ? false : true} className="action sleep" onClick={() => sleepPet()}>Sleep</Button>

                        {
                            props.sleepyLevel >= 50 ? (
                                <ProgressBar animated now={props.sleepyLevel} label={props.sleepyLevel} />
                            ) : (
                                props.sleepyLevel <= 10 ? (
                                    <ProgressBar variant="danger" animated now={props.sleepyLevel} label={props.sleepyLevel} />
                                ) : (
                                    <ProgressBar variant="warning" animated now={props.sleepyLevel} label={props.sleepyLevel} />
                                )
                            )
                        }
                    </div>
                    <br />
                    <div>
                        is dirty? {props.isDirty ? "yes" : "no"}
                        <Button disabled={props.isDirty ? false : true} className="action clean" onClick={() => cleanPet()}>Clean</Button>

                        {
                            props.dirtyLevel >= 50 ? (
                                <ProgressBar animated now={props.dirtyLevel} label={props.dirtyLevel} />
                            ) : (
                                props.dirtyLevel <= 10 ? (
                                    <ProgressBar variant="danger" animated now={props.dirtyLevel} label={props.dirtyLevel} />
                                ) : (
                                    <ProgressBar variant="warning" animated now={props.dirtyLevel} label={props.dirtyLevel} />
                                )
                            )
                        }
                    </div>
                    <br />
                    <div>
                        needs exercise? {props.isLazy ? "yes" : "no"}
                        <Button disabled={props.isLazy ? false : true} className="action walk" onClick={() => walkPet()}>Walk</Button>

                        {
                            props.lazyLevel >= 50 ? (
                                <ProgressBar animated now={props.lazyLevel} label={props.lazyLevel} />
                            ) : (
                                props.lazyLevel <= 10 ? (
                                    <ProgressBar variant="danger" animated now={props.lazyLevel} label={props.lazyLevel} />
                                ) : (
                                    <ProgressBar variant="warning" animated now={props.lazyLevel} label={props.lazyLevel} />
                                )
                            )
                        }
                    </div>
                </div>
                <br />
                <br />

                <Stack gap={2} className="col-md-5 mx-auto">
                    <Button variant="success" onClick={() => save()}>SAVE to database</Button>
                    <Button variant="outline-secondary">Logout</Button>
                </Stack>

            </section>
        </>
    );
}








