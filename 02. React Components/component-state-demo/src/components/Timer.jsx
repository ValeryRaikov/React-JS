import { useState } from "react";

export default function Timer() {
    const [time, setTime] = useState(0);

    setTimeout(() => {
        setTime(() => setTime(time + 1));
    }, '1000')

    let color;
    time % 2 === 0 ? color = 'red' : color = 'blue';

    return (
        <>
            <h1>Timer:</h1>

            <h2 style={{color}}>{time}</h2>
        </>
    );
}