import { useState } from "react";

import './Counter.css'

export default function Counter() {
    const [count, setCount] = useState(0);

    const incrementCounter = function() {
        setCount(prevCount => prevCount + 1);
    }

    const decrementCounter = function() {
        setCount(prevCount => prevCount - 1);
    }

    const resetCounter = function() {
        setCount(0);
    }

    let className;
    if (count > 0) {
        className = 'positive';
    } else {
        className = 'negative';
    }

    return (
        <>
            <hr />
            
            <h1>Counter:</h1>

            <h2 className={className}>{count}</h2>

            <button onClick={incrementCounter}>+</button>
            <button onClick={resetCounter}>0</button>
            <button onClick={decrementCounter}>-</button>
        </>
    );
}