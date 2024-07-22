import { useEffect, useRef, useState } from "react";

const testUrl = 'http://localhost:3030/jsonstore/advanced/profiles/fb352199-bcbc-4e1d-a1dc-ed346a6fb49a';

export default function ControlledForms() {
    const [user, setUser] = useState({
        _id: '',
        username: '',
        email: '',
        age: '',
    });

    const [formValues, setFormValues] = useState({
        _id: '',
        username: '',
        email: '',
        age: '',
        bio: '',
        occupation: 'ai',
        sex: 'f',
    });

    const inputRef = useRef();

    useEffect(() => {
        inputRef.current.focus();
    });

    useEffect(() => {
        (async () => {
            const response = await fetch(testUrl);
            const profile = await response.json();

            setUser(profile);
            // setFormValues(profile);
        })();
    }, []);

    const formSubmitHandler = (e) => {
        e.preventDefault();
    }

    // Dummy way only for test purposes
    const usernameChangeHandler = (e) => {
        setUser(prevUser => ({
            ...prevUser, 
            username: e.target.value
        }));
    }

    const emailChangeHandler = (e) => {
        setUser(prevUser => ({
            ...prevUser, 
            email: e.target.value
        }));
    }

    const ageChangeHandler = (e) => {
        setUser(prevUser => ({
            ...prevUser, 
            age: e.target.value
        }));
    }

    // Proper way
    const formChangeHandler = (e) => {
        setFormValues(prevFormValues => ({
            ...prevFormValues,
            [e.target.name]: e.target.type === 'checkbox'
            ? e.target.checked
            : e.target.value,
        }));
    };

    return (
        <>
            <h1>Controlled Form</h1>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username"
                        value={user.username}
                        onChange={usernameChangeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={user.email}
                        onChange={emailChangeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="age">Age</label>
                    <input 
                        type="number" 
                        name="age" 
                        id="age" 
                        value={user.age}
                        onChange={ageChangeHandler}
                    />
                </div>

                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>

            <h1>Controlled Form Enhanced</h1>
            <form onSubmit={formSubmitHandler}>
                <div>
                    <label htmlFor="username">Username</label>
                    <input 
                        type="text" 
                        name="username" 
                        id="username"
                        ref={inputRef}
                        value={formValues.username}
                        onChange={formChangeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="email">Email</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={formValues.email}
                        onChange={formChangeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="age">Age</label>
                    <input 
                        type="number" 
                        name="age" 
                        id="age" 
                        value={formValues.age}
                        onChange={formChangeHandler}
                    />
                </div>

                {/* More form fields */}
                <div>
                    <label htmlFor="bio">bio</label>
                    <textarea
                        name="bio"
                        id="bio"
                        value={formValues.bio}
                        onChange={formChangeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="occupation">Occupation</label>
                    <select
                        name="occupation"
                        id="occupation"
                        value={formValues.occupation}
                        onChange={formChangeHandler}
                    >
                        <option value="it">IT</option>
                        <option value="bi">BI</option>
                        <option value="ai">AI</option>
                    </select>
                </div>

                <div>
                    <label htmlFor="sex-m">Male</label>
                    <input
                        type="radio"
                        name="sex"
                        id="sex-m"
                        value="m"
                        checked={formValues.sex === 'm'}
                        onChange={formChangeHandler}
                    />
                    <label htmlFor="sex-f">Female</label>
                    <input
                        type="radio"
                        name="sex"
                        id="sex-f"
                        value="f"
                        checked={formValues.sex === 'f'}
                        onChange={formChangeHandler}
                    />
                </div>

                <div>
                    <label htmlFor="swimming">Swimming</label>
                    <input
                        type="checkbox"
                        name="swimming"
                        id="swimming"
                        value={formValues.swimming}
                        onChange={formChangeHandler}
                    />

                    <label htmlFor="fitness">Fitness</label>
                    <input
                        type="checkbox"
                        name="fitness"
                        id="fitness"
                        value={formValues.fitness}
                        onChange={formChangeHandler}
                    />
                </div>

                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </>
    );
}