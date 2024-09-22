import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import axios from "axios";
import { url } from '../url';
import { updateUser } from '../redux/userSlice';

export default function UpdateUsers() {
    const navigate = useNavigate();
    const { id } = useParams();

    const users = useSelector(state => state.users.users);
    const user = users.find(u => u.id === id);

    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [age, setAge] = useState(user.age);

    const dispatch = useDispatch();

    const submitHandler = (e) => {
        e.preventDefault();

        axios.put(`${url}/edit/${id}`, { name, email, age })
            .then(response => {
                dispatch(updateUser({ id, name, email, age }));
                navigate('/');
            })
            .catch(error => console.error(error));
    }

    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
                <form onSubmit={submitHandler}>
                    <h2>Update User</h2>
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
                        <button type="submit" className="btn btn-success">Update</button>
                        <button type="button" className="btn btn-danger" onClick={() => navigate('/')}>
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}