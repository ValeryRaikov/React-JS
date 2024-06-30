import { useState } from "react";

import './Test.css'

export default function Test(props) {
    const [count, setCount] = useState(0);
    const [colorized, setColorized] = useState(false);

    function increaseCount() {
        setCount(prevCount => prevCount + 1);
    }

    function colorizeContent() {
        setColorized(true);
    }

    if (count === 0) {
        return (
            <>
                <h2>This is only for test purpose!</h2>
                <button onClick={increaseCount}>Increase</button>
            </>
        );
    } else  {
        return (
            <div className={colorized ? 'colorize': ''}>
                <h1>{props.title}</h1>
    
                <ul>
                    <li style={{color: 'white', backgroundColor: 'red'}}>{props.text}</li>
                </ul>

                <button onClick={colorizeContent}>Colorize Content</button>
            </div>
        );
    }
}