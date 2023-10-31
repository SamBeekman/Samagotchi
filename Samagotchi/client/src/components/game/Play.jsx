import { Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import ProgressBar from 'react-bootstrap/ProgressBar';


export default function Play(props) {

    // timers
    const HUNGRY_TIMER = 100 * 1;
    const SLEEPY_TIMER = 100 * 2;
    const DIRTY_TIMER = 100 * 1.5;
    const LAZY_TIMER = 100 * 2.5;

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
            <section>
                <div className="text-center">
                    <br />
                    <h2>Pets name is: {props.currentPet.name}! </h2>
                    <Image src={props.sprite} alt="banner" fluid />
                    <br />
                    <h3>Level : {props.level}</h3>
                    <br />
                    <Button variant="success" disabled={props.exp >= props.reqExp ? false : true} onClick={() => levelUp()}>Level Up</Button>
                    <br />
                    <br />
                    <h3>Exp: {props.exp} / {props.reqExp}</h3>
                    <br />
                </div>

                <div className="action-buttons">
                    <div>

                        <Button disabled={props.isHungry ? false : true} className="action feed" onClick={() => feedPet()}>Feed</Button>
                        <span style={{ marginLeft: '10px' }}>
                            {props.isHungry ? "Golly im hungry" : "I just ate"}
                        </span>
                        <br /><br />

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

                        <Button disabled={props.isSleepy ? false : true} className="action sleep" onClick={() => sleepPet()}>Sleep</Button>
                        <span style={{ marginLeft: '10px' }}>
                            {props.isSleepy ? "Power nap time?" : "I'm full of beans"}
                        </span>
                        <br /><br />

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

                        <Button disabled={props.isDirty ? false : true} className="action clean" onClick={() => cleanPet()}>Clean</Button>
                        <span style={{ marginLeft: '10px' }}>
                            {props.isDirty ? "Wouldn't mind a sponge bath..." : "Clean as a whistle"}
                        </span>
                        <br /><br />

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

                        <Button disabled={props.isLazy ? false : true} className="action walk" onClick={() => walkPet()}>Walk</Button>
                        <span style={{ marginLeft: '10px' }}>
                            {props.isLazy ? "Getting a bit chunky over here..." : "You trying to kill me?"}
                        </span>
                        <br /><br />

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
                    <Button variant="success">SAVE to database</Button>
                    {/* will save to database not local storage, save need to be on pet change */}
                </Stack>

            </section>
        </>
    );
}








