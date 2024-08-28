import { useEffect, useRef, useState } from 'react';

import { data } from '../../assets/data';

import './Quiz.css';

export default function Quiz() {
    const [index, setIndex] = useState(0);
    const [question, setQuestion] = useState(data[index]);
    const [lock, setLock] = useState(false);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);

    const option1 = useRef(null);
    const option2 = useRef(null);
    const option3 = useRef(null);
    const option4 = useRef(null);

    const optionsArr = [option1, option2, option3, option4];

    useEffect(() => {
        setQuestion(data[index]);
    }, [index]);

    function checkAnswers(el, ans) {
        if (!lock) {
            if (question.ans === ans) {
                el.target.classList.add('correct');
                setScore(prevState => prevState + 1);
            }
            else {
                el.target.classList.add('wrong');
                optionsArr[question.ans - 1].current.classList.add('correct');
            }

            setLock(true);
        }
    }

    function nextQuestion() {
        if (lock) {
            if (index === data.length - 1) {
                setFinished(true);
                return;
            }

            setIndex(prevState => prevState + 1);
            setQuestion(data[index]);
            setLock(false);
            optionsArr.map(option => {
                option.current.classList.remove('wrong');
                option.current.classList.remove('correct');
                return null;
            });
        }
    }

    function reset() {
        setIndex(0);
        setQuestion(data[index]);
        setScore(0);
        setLock(false);
        setFinished(false);
    }

    return (
        <div className="container">
            <h1>Quiz App</h1>
            <hr />
            {finished 
                ? <>
                    <h2>You Scored {score} out of {data.length}!</h2>
                    <button onClick={reset}>Reset</button>
                </>
                : (<>
                    <h2>{index + 1}. {question.question}</h2>
                    <ul>
                        <li ref={option1} onClick={(el) => checkAnswers(el, 1)}>{question.option1}</li>
                        <li ref={option2} onClick={(el) => checkAnswers(el, 2)}>{question.option2}</li>
                        <li ref={option3} onClick={(el) => checkAnswers(el, 3)}>{question.option3}</li>
                        <li ref={option4} onClick={(el) => checkAnswers(el, 4)}>{question.option4}</li>
                    </ul>
                    <button onClick={nextQuestion}>Next</button>
                    <div className="index">{index + 1} of {data.length} questions</div>
                </>)
            }
        </div>
    );
}