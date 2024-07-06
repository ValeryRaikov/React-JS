import { useEffect } from "react";
import { useState } from "react";

export default function Timer() {
    const [isManual, setIsManual] = useState(false);
    const [time, setTime] = useState(() => {
        const currentSeconds = new Date().getSeconds();

        return currentSeconds;
    });

    useEffect(() => {
        if (!isManual) {
            setTimeout(() => {
                setTime(prevTime => prevTime + 1);
                setIsManual(false);
            }, 1000);
        }
    }, [time, isManual]);

    const addSecondsHandler = () => {
        setTime(prevTime => prevTime + 10);
        setIsManual(true);
    }

    return (
        <>
            <h2>Timer</h2>
            <h3>{time}</h3>
            <button type="submit" onClick={addSecondsHandler}>Add seconds</button>
        </>
    );
}