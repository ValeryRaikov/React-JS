import { useState } from "react";

export default function UncontrolledForms() {
    const [user, setUser] = useState({});

    const formSubmitHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        setUser({
            username: formData.get('username'),
            email: formData.get('email'),
            password: formData.get('password'),
        });
   }

   const logoutUserHandler = (e) => {
        setUser({});
   }

   const inputPasswordHandler = (e) => {
        console.log(e.target.value);
        // Do some validation logic here...
   }

    return (
        <>
            <h1>Uncontrolled Form</h1>

            {user.username && user.email && user.password
                ? <h3>Hello, {user.username}! 
                    <button onClick={logoutUserHandler}>Logout</button>
                </h3>
                : (
                    <form onSubmit={formSubmitHandler}>
                        <div>
                            <label htmlFor="username">Username</label>
                            <input type="text" name="username" id="username" />
                        </div>

                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="email" />
                        </div>

                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="password" onInput={inputPasswordHandler} />
                        </div>

                        <div>
                            <input type="submit" value="Login" />
                        </div>
                    </form>
                )
            }
        </>
    );
}