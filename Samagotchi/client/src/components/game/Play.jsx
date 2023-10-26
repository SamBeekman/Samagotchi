import { useEffect, useState } from "react";
// import { useLoadData } from "../customHooks/useLoadData";

export default function Play(props) {

    // const [data, setData] = useState({});
    // const [currentPet, setCurrentPet] = useState({});
    const [hungerState, setHungerState] = useState(0);
    const [sleepyState, setSleepyState] = useState(0);
    const [dirtyState, setDirtyState] = useState(0);
    const [lazyState, setLazyState] = useState(0);

    // timers
    const HUNGER_TIMER = 1000 * 3;
    const SLEEPY_TIMER = 1000 * 5;
    const DIRTY_TIMER = 1000 * 7;
    const LAZY_TIMER = 1000 * 9;
    const AUTO_SAVE_TIMER = 1000 * 60;


    // load data
    // useEffect(() => {
    //     setData(useLoadData());

    //     const savingInterval = setInterval(() => {
    //         console.log(`saving data...  ${Date.now()}`);
    //     }, AUTO_SAVE_TIMER);

    //     return () => {
    //         clearInterval(savingInterval);
    //     };
    // }, []);

    // hunger level
    // useEffect(() => {
    //     const hungerInterval = setInterval(() => {

    //         // const blah = (prevHungerLevel => {
    //         //     const newHungerLevel = prevHungerLevel + 1;
    //         // });

    //         const hi = currentPet.hungerLevel;

    //         setHungerState(hi);
    //         console.log("hunger level increased");
    //         console.log(`new hunger level is now ${hi}`); //newHungerLevel

    //         const updatedPet = {
    //             ...currentPet,
    //             hungerLevel: hi, //newHungerLevel,
    //             isHungry: hi >= currentPet.hungerThreshold //newHungerLevel
    //         };

    //         console.log(currentPet);

    //         setCurrentPet(updatedPet);
    //         return newHungerLevel;
    //     });
    // }, HUNGER_TIMER);

    useEffect(() => {
        const hungerInterval = setInterval(() => {

            props.increaseHunger();
            if (props.hungerLevel >= props.currentPet.hungerThreshold) {
                props.hasBecomeHungry();
            };



            // const hunger = () => {
            //     const newHungerLevel = props.currentPet.hungerLevel + 1;
            //     console.log("hunger level increased");
            //     console.log(`new hunger level is now ${newHungerLevel}`);
            //     const updatedPet = {
            //         ...props.currentPet,
            //         hungerLevel: newHungerLevel,
            //         isHungry: newHungerLevel >= props.currentPet.hungerThreshold
            //     };
            //     setCurrentPet(updatedPet);
            //     setHungerState(newHungerLevel);
            // };
            // hunger();
        }, HUNGER_TIMER);

        return () => {
            clearInterval(hungerInterval);
        };
    }, [hungerState]);

    // // Sleepy level
    // useEffect(() => {
    //     const sleepyInterval = setInterval(() => {
    //         setSleepyState(prevSleepyLevel => {
    //             const newSleepyLevel = prevSleepyLevel + 1;
    //             console.log("sleepy level increased");
    //             console.log(`new sleepy level is now ${newSleepyLevel}`);

    //             const updatedPet = {
    //                 ...props.currentPet,
    //                 sleepyLevel: newSleepyLevel,
    //                 isSleepy: newSleepyLevel >= props.currentPet.sleepyThreshold
    //             };

    //             setCurrentPet(updatedPet);
    //             return newSleepyLevel;
    //         });
    //     }, SLEEPY_TIMER);

    //     return () => {
    //         clearInterval(sleepyInterval);
    //     };
    // }, [sleepyState]);

    // // dirty level
    // useEffect(() => {
    //     const dirtyInterval = setInterval(() => {
    //         setDirtyState(prevDirtyLevel => {
    //             const newDirtyLevel = prevDirtyLevel + 1;
    //             console.log("dirty level increased");
    //             console.log(`new dirty level is now ${newDirtyLevel}`);

    //             const updatedPet = {
    //                 ...props.currentPet,
    //                 dirtyLevel: newDirtyLevel,
    //                 isDirty: newDirtyLevel >= props.currentPet.dirtyThreshold
    //             };

    //             setCurrentPet(updatedPet);
    //             return newDirtyLevel;
    //         });
    //     }, DIRTY_TIMER);

    //     return () => {
    //         clearInterval(dirtyInterval);
    //     };
    // }, [dirtyState]);

    // // lazy level
    // useEffect(() => {
    //     const lazyInterval = setInterval(() => {
    //         setLazyState(prevLazyLevel => {
    //             const newLazyLevel = prevLazyLevel + 1;
    //             console.log("lazy level increased");
    //             console.log(`new lazy level is now ${newLazyLevel}`);

    //             const updatedPet = {
    //                 ...props.currentPet,
    //                 lazyLevel: newLazyLevel,
    //                 isLazy: newLazyLevel >= props.currentPet.lazyThreshold
    //             };

    //             setCurrentPet(updatedPet);
    //             return newLazyLevel;
    //         });
    //     }, LAZY_TIMER);

    //     return () => {
    //         clearInterval(lazyInterval);
    //     };
    // }, [lazyState]);




    // // pet selection
    // const selectPet = (index) => {
    //     setCurrentPet(data[index - 1]);
    // };

    // feed pet
    const feedPet = () => {
        // setHungerState(0);
        // props.currentPet.isHungry = false;

        props.clearHungerLevel();
        console.log(`reset hunger level to 0`);
    };

    // // sleep pet
    // const sleepPet = () => {
    //     setSleepyState(0);
    //     props.currentPet.isSleepy = false;
    //     console.log(`reset sleepy level to 0`);
    // };

    // // clean pet
    // const cleanPet = () => {
    //     setDirtyState(0);
    //     props.currentPet.isDirty = false;
    //     console.log(`reset dirty level to 0`);
    // };

    // // walk pet
    // const walkPet = () => {
    //     setLazyState(0);
    //     props.currentPet.isLazy = false;
    //     console.log(`reset lazy level to 0`);
    // };


    return (
        <>

            <h1>Play Page</h1>

            <section>

                <h2>Current pet is: {props.currentPet.name} </h2>

                {/* <div className="pet-buttons">
                    Pets
                    <button className="pet1" onClick={() => selectPet(1)}>1</button>
                    <button className="pet2" onClick={() => selectPet(2)}>2</button>
                    <button className="pet3" onClick={() => selectPet(3)}>3</button>
                </div> */}


                <div className="action-buttons">
                    <div>
                        is hungry? {props.isHungry ? "yes" : "no"}
                        <button className="action feed" onClick={() => feedPet()}>Feed</button>
                        {props.hungerLevel}
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

            </section>

        </>
    );
}








// export default function Play() {
//     const [data, setData] = useState({});
//     const [currentPet, setCurrentPet] = useState(0);

//     useEffect(() => {
//         setData(useLoadData());
//     }, []);


//     // pet selection
//     const selectPet = (index) => {
//         setCurrentPet(data[index - 1]);
//     };

//     const handleAction = (action) => {
//         // Clone the current pet to make an immutable copy
//         const updatedPet = { ...currentPet };

//         switch (action) {
//             case 'feed':
//                 // Handle feeding action
//                 updatedPet.hungerLevel = 0;
//                 updatedPet.isHungry = false;
//                 console.log(`Fed ${updatedPet.name}`);
//                 break;

//             case 'sleep':
//                 // Handle sleeping action
//                 updatedPet.sleepyLevel = 0;
//                 updatedPet.isSleepy = false;
//                 console.log(`Put ${updatedPet.name} to sleep`);
//                 break;

//             case 'clean':
//                 // Handle cleaning action
//                 updatedPet.cleanLevel = 0;
//                 updatedPet.isClean = false;
//                 console.log(`Cleaned ${updatedPet.name}`);
//                 break;

//             case 'walk':
//                 // Handle walking action
//                 updatedPet.fitnessLevel = 0;
//                 updatedPet.isFit = false;
//                 console.log(`Took ${updatedPet.name} for a walk`);
//                 break;

//             default:
//                 console.log(`Unknown action: ${action}`);
//                 return;
//         }

//         // Update the pet state immutably and set it back to the state
//         setData(prevData => {
//             const newData = [...prevData];
//             newData[currentPet] = updatedPet;
//             return newData;
//         });
//     };


//     // timers
//     const HUNGER_TIMER = 1000 * 3;
//     const SLEEPY_TIMER = 1000 * 5;
//     const CLEAN_TIMER = 1000 * 7;
//     const FITNESS_TIMER = 1000 * 9;
//     const AUTO_SAVE_TIMER = 1000 * 60;


//     const [hungerState, setHungerState] = useState(0);
//     const [sleepyState, setSleepyState] = useState(0);
//     const [cleanState, setCleanState] = useState(0);
//     const [fitnessState, setFitnessState] = useState(0);


//     // saving interval
//     useEffect(() => {
//         const savingInterval = setInterval(() => {
//             console.log(`saving data...  ${Date.now()}`);
//         }, AUTO_SAVE_TIMER);

//         return () => {
//             clearInterval(savingInterval);
//         };
//     }, []);


//     // hunger level
//     useEffect(() => {
//         const hungerInterval = setInterval(() => {
//             setHungerState(prevHungerLevel => {
//                 const newHungerLevel = prevHungerLevel + 1;
//                 console.log("hunger level increased");
//                 console.log(`new hunger level is now ${newHungerLevel}`);

//                 const updatedPet = {
//                     ...currentPet,
//                     hungerLevel: newHungerLevel,
//                     isHungry: newHungerLevel >= currentPet.hungerThreshold
//                 };

//                 setCurrentPet(updatedPet);
//                 return newHungerLevel;
//             });
//         }, HUNGER_TIMER);

//         return () => {
//             clearInterval(hungerInterval);
//         };
//     }, [currentPet]);


//     // Sleepy level
//     useEffect(() => {
//         const sleepyInterval = setInterval(() => {
//             setSleepyState(prevSleepyLevel => {
//                 const newSleepyLevel = prevSleepyLevel + 1;
//                 console.log("sleepy level increased");
//                 console.log(`new sleepy level is now ${newSleepyLevel}`);

//                 const updatedPet = {
//                     ...currentPet,
//                     sleepyLevel: newSleepyLevel,
//                     isSleepy: newSleepyLevel >= currentPet.sleepyThreshold
//                 };

//                 setCurrentPet(updatedPet);
//                 return newSleepyLevel;
//             });
//         }, SLEEPY_TIMER);

//         return () => {
//             clearInterval(sleepyInterval);
//         };
//     }, [currentPet]);


//     // clean level
//     useEffect(() => {
//         const cleanInterval = setInterval(() => {
//             setCleanState(prevCleanLevel => {
//                 const newCleanLevel = prevCleanLevel + 1;
//                 console.log("clean level increased");
//                 console.log(`new clean level is now ${newCleanLevel}`);

//                 const updatedPet = {
//                     ...currentPet,
//                     cleanLevel: newCleanLevel,
//                     isClean: newCleanLevel >= currentPet.cleanThreshold
//                 };

//                 setCurrentPet(updatedPet);
//                 return newCleanLevel;
//             });
//         }, CLEAN_TIMER);

//         return () => {
//             clearInterval(cleanInterval);
//         };
//     }, [currentPet]);


//     // fitness level
//     useEffect(() => {
//         const fitnessInterval = setInterval(() => {
//             setFitnessState(prevFitnessLevel => {
//                 const newFitnessLevel = prevFitnessLevel + 1;
//                 console.log("fitness level increased");
//                 console.log(`new fitness level is now ${newFitnessLevel}`);

//                 const updatedPet = {
//                     ...currentPet,
//                     fitnessLevel: newFitnessLevel,
//                     isFit: newFitnessLevel >= currentPet.fitnessThreshold
//                 };

//                 setCurrentPet(updatedPet);
//                 return newFitnessLevel;
//             });
//         }, FITNESS_TIMER);

//         return () => {
//             clearInterval(fitnessInterval);
//         };
//     }, [currentPet]);


//     return (
//         <>
//             <h1>Play Page</h1>
//             <section>
//                 <h2>Current pet is: {currentPet.name} </h2>
//                 <div className="pet-buttons">
//                     Pets
//                     <button className="pet1" onClick={() => selectPet(1)}>1</button>
//                     <button className="pet2" onClick={() => selectPet(2)}>2</button>
//                     <button className="pet3" onClick={() => selectPet(3)}>3</button>
//                 </div>
//                 <div className="action-buttons">
//                     <div>
//                         {currentPet.isHungry ? `${currentPet.name} is hungry!` : `${currentPet.name} is not hungry!`}
//                         <button className="action" onClick={() => handleAction('feed')}>Feed</button>
//                         {currentPet.hungerLevel}
//                     </div>
//                     <div>
//                         {currentPet.isSleepy ? `${currentPet.name} is sleepy!` : `${currentPet.name} is not sleepy!`}
//                         <button className="action" onClick={() => handleAction('sleep')}>Sleep</button>
//                         {currentPet.sleepyLevel}
//                     </div>
//                     <div>
//                         {currentPet.isClean ? `${currentPet.name} is clean!` : `${currentPet.name} is not clean!`}
//                         <button className="action" onClick={() => handleAction('clean')}>Clean</button>
//                         {currentPet.cleanLevel}
//                     </div>
//                     <div>
//                         {currentPet.isFit ? `${currentPet.name} is fit!` : `${currentPet.name} is not fit!`}
//                         <button className="action" onClick={() => handleAction('walk')}>Walk</button>
//                         {currentPet.fitnessLevel}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }











