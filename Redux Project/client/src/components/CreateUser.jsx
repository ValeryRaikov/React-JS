import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import axios from "axios";
import { url } from '../url';
import { addUser } from '../redux/userSlice';

export default function CreateUser() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        axios.post(`${url}/create`, { name, email, age })
            .then(response => {
                dispatch(addUser(response.data));
                navigate('/');
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={submitHandler}>
                    <h2>Add User</h2>
                    <div className="mb-2">
                        <label htmlFor="name">Name:</label>
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Enter name..."
                            className="form-control"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email:</label>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Enter email..."
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="age">Age:</label>
                        <input 
                            type="number" 
                            name="age"
                            placeholder="Enter age..."
                            className="form-control"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                        />
                    </div>
                    <div className="d-flex gap-3">
                        <button type="submit" className="btn btn-success">Submit</button>
                        <button type="button" className="btn btn-danger" onClick={() => navigate('/')}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}