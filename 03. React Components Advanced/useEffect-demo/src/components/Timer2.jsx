import { useEffect } from "react";
import { useState } from "react";

export default function Timer2() {
    const [time, setTime] = useState(() => {
        const currentSeconds = new Date().getSeconds();

        return currentSeconds;
    });

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(prevTime => prevTime + 1);
        }, 1000);

        return () => {
            clearTimeout(timer);
        }
    }, []);

    const addSecondsHandler = () => {
        setTime(prevTime => prevTime + 10);
    };

    return (
        <>
            <h2>Timer2</h2>
            <h3>{time}</h3>
            <button type="submit" onClick={addSecondsHandler}>Add seconds</button>
        </>
    );
}